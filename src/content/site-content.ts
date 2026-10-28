export type PersonaSlug =
  | "lifestyle"
  | "realtor"
  | "trader"
  | "office-manager";

export type PersonaTheme = "violet" | "blue" | "emerald" | "orange";

export interface PersonaCard {
  slug: PersonaSlug;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  href: string;
  theme: PersonaTheme;
}

export interface SolutionFeature {
  title: string;
  description: string;
  tagline: string;
}

export interface Scenario {
  scenario: string;
  outcome: string;
}

export interface SolutionPageContent {
  slug: PersonaSlug;
  metaTitle: string;
  personaLabel: string;
  heroHeadline: string;
  heroDescription: string;
  theme: PersonaTheme;
  features: SolutionFeature[];
  scenarios: Scenario[];
  ctaHeadline: string;
  ctaDescription: string;
}

export const site = {
  name: "Queta AI",
  domain: "https://www.queta.ai",
  defaultTitle: "Queta AI — Your AI. Your Persona. Your Edge.",
  defaultDescription:
    "Queta AI delivers persona-based agentic AI solutions for Lifestyle Users, Realtors, Traders, and Office Managers — eliminating operational overhead so you can focus on what matters.",
  footerTagline: "Redefining how the world works — one persona at a time.",
  footerBlurb:
    "Agentic AI solutions built around you. Choose your persona. Eliminate the overhead.",
  copyright: "© 2026 Queta AI. All rights reserved.",
} as const;

export const navigation = {
  solutions: [
    { label: "Lifestyle User", href: "/solutions/lifestyle" },
    { label: "Realtor", href: "/solutions/realtor" },
    { label: "Trader", href: "/solutions/trader" },
    { label: "Office Manager", href: "/solutions/office-manager" },
  ] as const,
  links: [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,
  cta: { label: "Request a Demo", href: "/contact" },
} as const;

export const home = {
  hero: {
    badge: "Agentic AI Bots tailor made for you ..",
    title: "Your AI. Your Persona. Your Edge.",
    description:
      "Queta AI delivers agentic solutions built around who you are — eliminating mundane tasks so you can focus on what actually matters.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Explore Solutions", href: "#solutions" },
  },
  personasSection: {
    eyebrow: "Choose Your Persona",
    title: "One platform.",
    titleLine2: "Four superpowers.",
  },
  statsSection: {
    eyebrow: "The Numbers",
    title: "Work is about to get",
    titleHighlight: "radically different.",
    description:
      "Queta AI agents don't just assist — they act. Autonomously handling the tasks that drain your time, so you operate at a level that wasn't possible before.",
    stats: [
      { value: "10x", label: "Faster task completion" },
      { value: "80%", label: "Reduction in manual overhead" },
      { value: "24/7", label: "Always-on AI agents" },
      { value: "4", label: "Persona-tailored solutions" },
    ],
  },
  personaCards: [
    {
      slug: "lifestyle",
      label: "Lifestyle User",
      headline: "Live more. Manage less.",
      description:
        "Your personal AI agent handles scheduling, reminders, travel planning, and daily task management — so your life runs itself.",
      bullets: [
        "Smart scheduling & calendar sync",
        "Travel & errand automation",
        "Health & wellness tracking",
        "Personal finance insights",
      ],
      href: "/solutions/lifestyle",
      theme: "violet",
    },
    {
      slug: "realtor",
      label: "Realtor",
      headline: "Close faster. Work smarter.",
      description:
        "From lead follow-up to listing management, your AI agent keeps every deal moving without the manual grind.",
      bullets: [
        "Automated lead nurturing",
        "Listing & CRM sync",
        "Market analysis reports",
        "Client communication drafts",
      ],
      href: "/solutions/realtor",
      theme: "blue",
    },
    {
      slug: "trader",
      label: "Trader",
      headline: "React in milliseconds. Decide in seconds.",
      description:
        "Real-time market intelligence and automated workflow execution — your AI agent never sleeps, never misses a signal.",
      bullets: [
        "Real-time market monitoring",
        "Alert & signal automation",
        "Portfolio summary reports",
        "News sentiment analysis",
      ],
      href: "/solutions/trader",
      theme: "emerald",
    },
    {
      slug: "office-manager",
      label: "Office Manager",
      headline: "Run the office. Not the other way around.",
      description:
        "Streamline operations, vendor coordination, and team communications with an AI agent that keeps everything on track.",
      bullets: [
        "Meeting scheduling & notes",
        "Vendor & supply management",
        "Team task coordination",
        "Expense & budget tracking",
      ],
      href: "/solutions/office-manager",
      theme: "orange",
    },
  ] satisfies PersonaCard[],
} as const;

export const pricing = {
  metaTitle: "Pricing — Queta AI",
  hero: {
    title: "One agent. Infinite leverage.",
    subtitle:
      "Simple, transparent pricing built around your persona. No hidden fees, just your edge.",
  },
  disclaimer: "Prices are subject to change without prior notice",
  tiers: [
    {
      name: "Lifestyle User",
      prices: [
        { amount: "$299", note: "up to 5 agents" },
        { amount: "$399", note: "all agents" },
      ],
      description:
        "For individuals ready to reclaim their time and automate the basics.",
      features: [
        "Travel Agent",
        "Personal Shopper",
        "Redact Personal Information",
        "Home/Property Manager",
        "Personal Chef",
        "Health Monitor",
        "College Advisor",
        "Subscription Tracker",
        "Teacher Bot",
        "Inbox Agent",
        "Retirement Planner",
        "Spending Coach",
      ],
      cta: "Get Started",
    },
    {
      name: "Trader",
      prices: [{ amount: "$449", note: "" }],
      description:
        "For active traders who need real-time intelligence and automated execution.",
      features: [
        "Real-Time Market Scanner",
        "Options Flow Analyzer",
        "Portfolio Risk Monitor",
        "Earnings Calendar Agent",
        "News Sentiment Analyzer",
        "Trade Journal Automation",
      ],
      cta: "Get Started",
    },
    {
      name: "Realtor / Office Manager",
      prices: [{ amount: "$399", note: "" }],
      description:
        "For real estate professionals and office managers automating client and workflow tasks.",
      features: [
        "Listing Description Writer",
        "Client Follow-Up Agent",
        "Showing Scheduler",
        "Market Comparison Tool",
        "Document Summarizer",
        "Email & Calendar Manager",
      ],
      cta: "Get Started",
    },
  ],
  why: {
    eyebrow: "Why We Built This",
    title: "Built by people who ran out of time.",
    stats: [
      { value: "10x", label: "Productivity gain" },
      { value: "80%", label: "Time saved on tasks" },
      { value: "24/7", label: "Always on for you" },
    ],
    body: "We're founders, traders, and operators who spent years drowning in repetitive tasks. We built Queta AI because we needed it ourselves — and we knew others did too.",
  },
  bottomCta: {
    title: "Ready to get your edge?",
    description: "Join the waitlist and be first to access your AI persona.",
  },
} as const;

export const about = {
  metaTitle: "About — Queta AI",
  hero: {
    eyebrow: "About Queta AI",
    title: "Built to give you your time back.",
    intro:
      "Queta AI was founded on the belief that the most capable people in the world should not be spending their days on tasks that don't require their talent.",
  },
  mission: {
    eyebrow: "Our Mission",
    paragraphs: [
      "Queta AI was founded by two co-founders who bring together deep expertise across software engineering, finance, and sales. Having spent years at the intersection of technology and high-performance industries, they witnessed firsthand how much time skilled professionals lose to repetitive, low-value tasks — scheduling, follow-ups, data management, and operational coordination.",
      "That observation became a conviction: AI should do more than answer questions. It should act. It should own workflows, execute decisions within defined parameters, and operate end-to-end on behalf of the people it serves — not simply suggest what to do next.",
      "Queta AI was built to solve that problem. Our agentic platform is designed around real personas and real workflows, giving every user a personal AI agent that thinks, acts, and executes on their behalf — so they can focus entirely on what only they can do.",
    ],
  },
  founders: {
    eyebrow: "Our Founders",
    title: "Deep expertise. A shared obsession with reclaiming time.",
    intro:
      "Queta AI was founded by two technology and business leaders with complementary backgrounds spanning software engineering, financial markets, and enterprise sales. Their combined experience across these disciplines gave them a unique vantage point: they understood both the technical potential of agentic AI and the real-world operational pain points that professionals face every day.",
    closing:
      "Together, they set out to build something different — not another productivity tool, but a true AI agent platform that executes on behalf of its users. The mission has remained constant from day one: make everyday tasks effortless, and give people back the time to focus on what is most important to them.",
    people: [
      {
        role: "Co-Founder & CEO",
        area: "Strategy & Business Development",
        bio: "Brings extensive experience in finance and enterprise sales, with a track record of building high-performance teams and taking products to market. Leads Queta AI's vision, partnerships, and go-to-market strategy.",
      },
      {
        role: "Co-Founder & CTO",
        area: "Engineering & Product",
        bio: "A seasoned software engineer with deep expertise in AI systems and platform architecture. Leads the design and development of Queta's agentic execution layer and persona-driven intelligence.",
      },
    ],
  },
  principles: {
    eyebrow: "What we believe",
    title: "Our principles.",
    items: [
      {
        title: "Agency over assistance",
        body: "We build agents that act, not chatbots that suggest. The difference between the two is everything.",
      },
      {
        title: "Persona-first design",
        body: "Generic AI produces generic results. We build for specific people with specific needs — and the depth shows in every interaction.",
      },
      {
        title: "Trust through transparency",
        body: "Your agent operates within boundaries you define. You always know what it is doing, why it is doing it, and how to adjust.",
      },
      {
        title: "Relentless execution",
        body: "We hold ourselves to the same standard we set for our agents — ship fast, iterate constantly, and never settle for good enough.",
      },
    ],
  },
  cta: {
    title: "Ready to get your time back?",
    description: "Request a personalized demo and see what Queta AI can do for you.",
  },
} as const;

export const contact = {
  metaTitle: "Contact Us — Queta AI",
  hero: {
    title: "We'd love to hear from you",
    description:
      "Have a question or want to learn more about Queta AI? Send us a message and we'll get back to you within 24 hours.",
  },
  form: {
    submitLabel: "Submit",
    fields: {
      name: { label: "Name", placeholder: "Your full name", type: "text" as const },
      email: { label: "Email", placeholder: "you@example.com", type: "email" as const },
      phone: { label: "Phone Number", placeholder: "Your phone number", type: "tel" as const },
      comments: {
        label: "Comments",
        placeholder: "Tell us how we can help...",
        type: "textarea" as const,
      },
    },
  },
} as const;

const realtorSolution: SolutionPageContent = {
  slug: "realtor",
  metaTitle: "Realtor AI Agent — Queta AI",
  personaLabel: "Realtor",
  heroHeadline: "Close faster. Work smarter.",
  heroDescription:
    "Your AI agent keeps every deal moving — from first lead to final signature — without the manual follow-up, data entry, or missed opportunities.",
  theme: "blue",
  features: [
    {
      title: "Automated Lead Nurturing",
      description:
        "Your agent follows up with every lead on the right cadence — personalized messages, timely check-ins, and no lead left cold.",
      tagline: "Respond within minutes of a new inquiry, even when you're showing a property.",
    },
    {
      title: "Listing & CRM Sync",
      description:
        "New listings, price changes, and status updates flow automatically into your CRM and marketing channels.",
      tagline: "Your agent keeps every record current so you're never working from stale data.",
    },
    {
      title: "Market Analysis Reports",
      description:
        "Get instant comps, neighborhood trend summaries, and buyer/seller market insights — ready to share with clients.",
      tagline: "Walk into every meeting with data that builds trust and closes deals.",
    },
    {
      title: "Client Communication Drafts",
      description:
        "Your agent drafts emails, follow-ups, and offer summaries in your voice — you review and send.",
      tagline: "Cut hours of writing down to minutes without losing the personal touch.",
    },
    {
      title: "Showing Coordination",
      description:
        "Schedule showings, send confirmations, collect feedback, and log notes — all handled automatically.",
      tagline: "Your calendar stays organized and clients stay informed without back-and-forth.",
    },
    {
      title: "Transaction Timeline Tracking",
      description:
        "Monitor every deal's milestones — inspections, contingencies, closing dates — and get alerts before deadlines slip.",
      tagline: "Nothing falls through the cracks when your agent is watching every deal.",
    },
  ],
  scenarios: [
    {
      scenario: "New lead submits a contact form at 11pm",
      outcome: "Personalized follow-up sent within 5 minutes, meeting booked by morning",
    },
    {
      scenario: "Client asks for comps on a 3BR in Midtown",
      outcome: "Market analysis report generated and emailed in under 2 minutes",
    },
    {
      scenario: "Inspection deadline is in 3 days",
      outcome: "Proactive alert sent with checklist and vendor contacts ready",
    },
  ],
  ctaHeadline: "Ready to close more deals?",
  ctaDescription: "Request a demo and see your Realtor AI agent in action.",
};

const traderSolution: SolutionPageContent = {
  slug: "trader",
  metaTitle: "Trader AI Agent — Queta AI",
  personaLabel: "Trader",
  heroHeadline: "React in milliseconds. Decide in seconds.",
  heroDescription:
    "Your AI agent monitors markets around the clock, surfaces signals the moment they matter, and executes your defined workflows — so you never miss a move.",
  theme: "emerald",
  features: [
    {
      title: "Real-Time Market Monitoring",
      description:
        "Your agent watches price action, volume, and volatility across your watchlist 24/7 — alerting you the instant conditions match your criteria.",
      tagline: "Set your parameters once. Your agent never sleeps, never blinks.",
    },
    {
      title: "Alert & Signal Automation",
      description:
        "Define your entry and exit conditions. Your agent fires alerts via your preferred channel the moment a signal triggers.",
      tagline: "No more staring at charts. Your agent does the watching.",
    },
    {
      title: "Portfolio Summary Reports",
      description:
        "Get a clear daily or weekly snapshot of your positions, P&L, exposure, and performance — formatted for fast review.",
      tagline: "Know exactly where you stand before the market opens.",
    },
    {
      title: "News Sentiment Analysis",
      description:
        "Your agent scans financial news, earnings releases, and macro events — surfacing sentiment shifts that could move your positions.",
      tagline: "Stay ahead of the narrative, not behind it.",
    },
    {
      title: "Workflow Execution",
      description:
        "Automate your pre-market routine, post-trade logging, and end-of-day review — your agent runs the process so you focus on the decision.",
      tagline: "Consistent process. Consistent edge.",
    },
    {
      title: "Stock Analyst commentary",
      description: "Real-time updates for stock upgrade and downgrade.",
      tagline: "Your agent keeps you informed on what stock analysts are saying.",
    },
  ],
  scenarios: [
    {
      scenario: "A stock on my watchlist breaks out on volume",
      outcome: "Alert fired in real time with price, volume, and news context attached",
    },
    {
      scenario: "I want a pre-market briefing every day at 8am",
      outcome: "Automated report: overnight moves, macro events, and watchlist status",
    },
    {
      scenario: "My portfolio is overexposed to tech",
      outcome: "Concentration alert triggered with rebalancing suggestions",
    },
  ],
  ctaHeadline: "Ready to trade with an edge?",
  ctaDescription: "Request a demo and see your Trader AI agent in action.",
};

const officeManagerSolution: SolutionPageContent = {
  slug: "office-manager",
  metaTitle: "Office Manager AI Agent — Queta AI",
  personaLabel: "Office Manager",
  heroHeadline: "Run the office. Not the other way around.",
  heroDescription:
    "Your AI agent coordinates meetings, vendors, team tasks, and budgets — keeping operations running smoothly so you can focus on the work that actually moves the needle.",
  theme: "orange",
  features: [
    {
      title: "Meeting Scheduling & Notes",
      description:
        "Your agent finds the right time, sends invites, preps agendas, and captures action items — so every meeting has a clear outcome.",
      tagline: "No more scheduling back-and-forth. No more lost follow-ups.",
    },
    {
      title: "Vendor & Supply Management",
      description:
        "Track vendor contracts, reorder supplies before they run out, and manage service schedules — all automated.",
      tagline: "Your agent keeps the office stocked and vendors accountable.",
    },
    {
      title: "Team Task Coordination",
      description:
        "Assign, track, and follow up on team tasks without micromanaging — your agent surfaces blockers and keeps projects on schedule.",
      tagline: "Everyone knows what they own. Nothing slips through.",
    },
    {
      title: "Expense & Budget Tracking",
      description:
        "Log expenses, flag overruns, and generate spend summaries — your agent keeps the budget visible and under control.",
      tagline: "No more end-of-month surprises.",
    },
    {
      title: "Onboarding Automation",
      description:
        "New hire? Your agent triggers the full onboarding checklist — IT setup, paperwork, introductions, and first-week schedule.",
      tagline: "Consistent, professional onboarding every time.",
    },
    {
      title: "Compliance & Deadline Tracking",
      description:
        "Monitor renewal dates, compliance deadlines, and regulatory requirements — with alerts well before anything lapses.",
      tagline: "Your agent is the institutional memory the office always needed.",
    },
  ],
  scenarios: [
    {
      scenario: "Schedule a quarterly review with 8 stakeholders across 3 time zones",
      outcome: "Optimal time found, invites sent, agenda drafted — in under 60 seconds",
    },
    {
      scenario: "Office supplies are running low",
      outcome: "Reorder triggered automatically based on usage thresholds",
    },
    {
      scenario: "New employee starts Monday",
      outcome: "Full onboarding checklist triggered Friday — IT, HR, and manager all notified",
    },
  ],
  ctaHeadline: "Ready to run a tighter operation?",
  ctaDescription: "Request a demo and see your Office Manager AI agent in action.",
};

const lifestyleSolution: SolutionPageContent = {
  slug: "lifestyle",
  metaTitle: "Lifestyle User AI Agent — Queta AI",
  personaLabel: "Lifestyle User",
  heroHeadline: "Live more. Manage less.",
  heroDescription:
    "Your personal AI agent handles the logistics of daily life — scheduling, errands, travel, finances — so you can spend your time on what actually matters.",
  theme: "violet",
  features: [
    {
      title: "Inbox Agent",
      description:
        "Reads, sorts, and drafts replies to your emails and messages — so your inbox stays at zero without the effort.",
      tagline: "Never miss an important message or spend another hour triaging your inbox.",
    },
    {
      title: "Home / Property Manager",
      description:
        "Tracks maintenance schedules, coordinates vendors, manages warranties, and keeps your home running smoothly.",
      tagline: "From HVAC servicing to lease renewals, your agent stays on top of every property task.",
    },
    {
      title: "Personal Chef",
      description:
        "Plans weekly menus based on your dietary preferences, generates shopping lists, and suggests recipes for any occasion.",
      tagline: "Eat better without the planning overhead — your agent handles the full meal prep loop.",
    },
    {
      title: "Travel Agent",
      description:
        "Researches destinations, compares prices, books flights and hotels, and builds complete itineraries tailored to you.",
      tagline: "Itineraries, packing lists, local recommendations — all prepared before you leave.",
    },
    {
      title: "Personal Shopper",
      description:
        "Finds the best deals, tracks price drops, manages wishlists, and handles purchases — all on your behalf.",
      tagline: "Never overpay or miss a sale again — your agent shops smarter so you don't have to.",
    },
    {
      title: "Health Monitor",
      description:
        "Tracks vitals, logs fitness activity, schedules check-ups, and surfaces health insights to keep you at your best.",
      tagline: "Your agent connects the dots between your habits and your long-term wellness goals.",
    },
    {
      title: "Stock Analyst",
      description:
        "Monitors your portfolio, surfaces market news relevant to your holdings, and flags opportunities or risks in real time.",
      tagline: "Stay informed without being glued to a screen — your agent watches the market for you.",
    },
    {
      title: "College Advisor",
      description:
        "Guides students through college research, application timelines, essay prep, and financial aid — step by step.",
      tagline: "From school shortlists to submitted applications, your agent keeps the process on track.",
    },
    {
      title: "Teacher Bot",
      description:
        "Delivers personalized lessons, answers questions, quizzes you on any subject, and adapts to your learning pace.",
      tagline: "Learn anything, at your own pace, with an agent that adjusts to how you think.",
    },
    {
      title: "Personal Info Bot",
      description:
        "Automatically detects and redacts personally identifiable information from documents, emails, and messages before sharing.",
      tagline: "Share confidently — your agent scrubs sensitive data before anything leaves your hands.",
    },
    {
      title: "Retirement Planner",
      description:
        "Models retirement scenarios, tracks savings progress, analyzes contribution strategies, and keeps your long-term financial goals on course.",
      tagline: "Your agent runs the numbers so your future self stays on track — no spreadsheets required.",
    },
    {
      title: "Spending Coach",
      description:
        "Analyzes your spending patterns, identifies waste, sets budget targets, and nudges you toward smarter financial habits daily.",
      tagline: "Know exactly where your money goes — and get actionable guidance to keep more of it.",
    },
    {
      title: "Subscription Manager",
      description:
        "Audits all your active subscriptions, flags unused services, tracks renewal dates, and cancels what you no longer need.",
      tagline: "Stop paying for things you forgot you signed up for — your agent keeps every subscription in check.",
    },
  ],
  scenarios: [
    {
      scenario: "Book a weekend trip to Asheville for two",
      outcome: "Flights, hotel, and restaurant reservations handled in minutes",
    },
    {
      scenario: "Remind me to renew my car insurance before it lapses",
      outcome: "Proactive alert 30 days out with renewal link ready",
    },
    {
      scenario: "I want to eat healthier this month",
      outcome: "Meal plan drafted, grocery list created, delivery scheduled",
    },
  ],
  ctaHeadline: "",
  ctaDescription: "",
};

export const solutions: Record<PersonaSlug, SolutionPageContent> = {
  lifestyle: lifestyleSolution,
  realtor: realtorSolution,
  trader: traderSolution,
  "office-manager": officeManagerSolution,
};

export const publicRoutes = [
  "/",
  "/pricing",
  "/about",
  "/contact",
  "/solutions/lifestyle",
  "/solutions/realtor",
  "/solutions/trader",
  "/solutions/office-manager",
] as const;
