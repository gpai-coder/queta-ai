import path from "node:path";

const FORM_SUBMIT_URL_PATTERN = "**/formsubmit.co/ajax/**";

function assertPayload(body) {
  const errors = [];
  if (body._captcha !== false) {
    errors.push("_captcha must be false");
  }
  if (typeof body._subject !== "string" || !body._subject.startsWith("New Queta AI contact")) {
    errors.push("_subject must start with New Queta AI contact");
  }
  if (body._honey !== "") {
    errors.push("_honey must be empty");
  }
  if (!body.name || !body.email || !body.interest) {
    errors.push("missing required fields");
  }
  return errors;
}

export async function verifyContactForm(browser, evidenceDir, localBase) {
  const results = { success: null, error: null };
  const base = localBase.replace(/\/$/, "");

  const successContext = await browser.newContext();
  const successPage = await successContext.newPage();
  let capturedBody = null;

  await successPage.route(FORM_SUBMIT_URL_PATTERN, async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    capturedBody = route.request().postDataJSON();
    const payloadErrors = assertPayload(capturedBody);
    if (payloadErrors.length > 0) {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ success: false, message: payloadErrors.join("; ") }),
      });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: "Thank you" }),
    });
  });

  await successPage.goto(`${base}/contact?interest=waitlist`, { waitUntil: "load" });
  await successPage.getByLabel("Name").fill("Verify Test");
  await successPage.getByLabel("Email").fill("verify@example.com");
  await successPage.getByLabel("Phone Number").fill("555-0100");
  await successPage.getByLabel("Comments").fill("Verification run — mocked success.");
  await successPage.getByTestId("contact-form-submit").click();
  await successPage.getByTestId("contact-form-status-success").waitFor({ timeout: 15_000 });
  await successPage.screenshot({
    path: path.join(evidenceDir, "contact-form-success.png"),
    fullPage: true,
  });
  results.success = {
    ok: true,
    subject: capturedBody?._subject,
  };
  await successContext.close();

  const errorContext = await browser.newContext();
  const errorPage = await errorContext.newPage();
  await errorPage.route(FORM_SUBMIT_URL_PATTERN, async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ success: false }),
    });
  });

  await errorPage.goto(`${base}/contact`, { waitUntil: "load" });
  await errorPage.getByLabel("Interest").fill("General inquiry");
  await errorPage.getByLabel("Name").fill("Verify Test");
  await errorPage.getByLabel("Email").fill("verify@example.com");
  await errorPage.getByLabel("Phone Number").fill("555-0100");
  await errorPage.getByLabel("Comments").fill("Verification run — mocked failure.");
  await errorPage.getByTestId("contact-form-submit").click();
  await errorPage.getByTestId("contact-form-status-error").waitFor({ timeout: 15_000 });
  await errorPage.screenshot({
    path: path.join(evidenceDir, "contact-form-error.png"),
    fullPage: true,
  });
  results.error = { ok: true };
  await errorContext.close();

  return results;
}
