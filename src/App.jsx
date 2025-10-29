import React, { useMemo, useState, useEffect, useRef } from "react";


function SectionHeader({ eyebrow, title, subtitle, center, invert }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`inline-block text-xs tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur ${
            invert
              ? "border border-white/15 bg-white/10 text-white/80"
              : "border border-white/15 bg-white/5 text-white/80"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h3
        className={`font-display mt-3 text-3xl sm:text-4xl font-bold ${
          invert ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={`mt-2 max-w-2xl ${
            invert ? "text-white/80 mx-auto" : "text-white/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AccordionItem({ id, openId, setOpenId, question, answer }) {
  const isOpen = openId === id;
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (bodyRef.current) setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen, answer]);

  return (
    <div className="rounded-2xl card-gradient shadow-sm overflow-hidden border border-white/10 text-white">
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium pr-6">{question}</span>
        <span
          className={`w-7 h-7 grid place-items-center rounded-full text-sm ${
            isOpen ? "bg-white/15" : "border border-white/25"
          }`}
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>
      <div
        style={{ maxHeight: height }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div ref={bodyRef} className="px-5 pb-5 pt-0 text-white/85">
          {answer}
        </div>
      </div>
    </div>
  );
}

function StatChip({ label, value }) {
  // dark, non-white chip
  return (
    <div className="px-3 py-2 text-xs rounded-xl border border-white/15 bg-white/5 text-white">
      <div className="font-semibold">{value}</div>
      <div className="text-white/75">{label}</div>
    </div>
  );
}


/* ---------- Plan Modal (professional panels + refined wording) ---------- */
function PlanModal({ open, onClose, plan }) {
  if (!open || !plan) return null;
  const { introTitle, introBody, outcomes } = plan.intro;

  const Check = ({ children }) => (
    <li className="flex gap-3 items-start text-white/90">
      <span className="mt-0.5 text-emerald-300">✔</span>
      <span>{children}</span>
    </li>
  );

  const Pill = ({ label, value }) => (
    <div className="px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/15">
      <div className="font-semibold text-white">{value}</div>
      <div className="text-white/75">{label}</div>
    </div>
  );

  const Tile = ({ title, hint, children }) => (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between gap-3">
        <h6 className="font-display text-base font-semibold text-white">{title}</h6>
        {hint ? <span className="text-xs text-white/60">{hint}</span> : null}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );

  const WeekBlock = ({ w, d }) => (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="font-medium text-white">{w}</div>
      <ul className="mt-2 list-disc pl-5 text-sm text-white/80 grid gap-1">
        {d.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-6">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full sm:max-w-4xl bg-[#0b1220] rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-8 text-white bg-gradient-to-r from-[var(--grad-start)] via-[var(--grad-mid)] to-[var(--grad-end)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-90">Program at a glance</p>
              <h4 className="font-display mt-1 text-3xl md:text-4xl font-bold">{plan.name}</h4>
              <p className="opacity-95 text-lg md:text-xl">{plan.price}</p>
            </div>

            <div className="flex gap-2">
              <Pill label="Weeks" value={plan.stats.weeks} />
              <Pill label="1:1 Sessions" value={plan.stats.sessions} />
              <Pill label="Primary Focus" value={plan.stats.focus} />
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto grid gap-8 text-white">
          {/* Intro copy */}
          <div>
            <h5 className="font-display text-xl font-semibold">{introTitle}</h5>
            <p className="mt-2 text-white/85 max-w-3xl">{introBody}</p>
          </div>

          {/* Panels: what's inside / outcomes */}
          <div className="grid md:grid-cols-2 gap-6">
            <Tile title="Inside your coaching" hint="What’s included">
              <ul className="grid gap-2 text-sm">
                {plan.features.map((f, i) => (
                  <Check key={i}>{f}</Check>
                ))}
              </ul>
            </Tile>

            <Tile title="Outcomes you can expect" hint="Measured progress">
              <ul className="grid gap-2 text-sm">
                {outcomes.map((o, i) => (
                  <Check key={i}>{o}</Check>
                ))}
              </ul>
            </Tile>
          </div>

          {/* Weekly milestones */}
{plan.weeks?.length ? (
  <div>
    <div className="flex items-center justify-between">
      <h6 className="font-display text-base font-semibold text-white">
        Weekly milestones
      </h6>
      <span className="text-xs text-white/60">
        A clear path from week to week
      </span>
    </div>

    {/* Denser, more premium grid */}
    <div className="mt-4 grid md:grid-cols-2 gap-5">
      {plan.weeks.map((wk) => (
        <WeekBlock key={wk.w} w={wk.w} d={wk.d} />
      ))}
    </div>
  </div>
) : null}


          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a href="#" className="btn-gradient rounded-xl px-6 py-3 text-sm font-medium shadow-lg">
              Book Free Consult
            </a>
            <button onClick={onClose} className="btn-dark rounded-xl px-6 py-3 text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function LimitlessLandingPage() {
  const headline =
    "Stop Trying to Fix Your Life — Start Transforming Your Mindset";
  const subheadline = "The journey from limited to limitless begins within.";
  const altHeadline = "Don’t Just Change What You Do — Transform Who You Are";
  const altSubheadline =
    "Shift your identity, beliefs, and emotions to unlock your limitless potential.";

  const features = [
    {
      title: "Identity Reset",
      body:
        "Uncover and break limiting beliefs while building a stronger, empowered sense of self.",
      icon: "🧩",
    },
    {
      title: "Emotional Rewiring",
      body:
        "Manage self-doubt, stress, and fear with practical tools so they stop running the show.",
      icon: "🌬️",
    },
    {
      title: "Future Self Embodiment",
      body:
        "Step into the mindset and energy of your most confident, motivated self.",
      icon: "✨",
    },
    {
      title: "Accountability & Support",
      body:
        "Weekly 1:1 guidance to keep you focused, challenged, and moving forward.",
      icon: "🤝",
    },
    {
      title: "Practical Daily Tools",
      body:
        "Breathwork, journaling prompts, mindset shifts, and visualizations you can use anytime.",
      icon: "🧭",
    },
  ];

  const p1Weeks = [
    {
      w: "Week 1 — Awareness & Vision",
      d: [
        "Map current vs. desired state",
        "Identify limiting thoughts",
        "Guided visualization: Meet your future self",
      ],
    },
    {
      w: "Week 2 — Identity Reset",
      d: ["Dismantle old labels", "Build empowering self-concepts", "Daily affirmations"],
    },
    {
      w: "Week 3 — Release Blocks",
      d: [
        "Tools for fear/frustration/doubt",
        "Body-based reset (breath + release)",
        "Journal: “Who am I without doubt?”",
      ],
    },
    {
      w: "Week 4 — Resilience",
      d: [
        "Failure as feedback",
        "Stories of resilience",
        "Confidence Bank: evidence of wins",
      ],
    },
  ];
  const p2Weeks = [
    { w: "Week 5 — Emotional Rewiring", d: ["Daily reset ritual", "Responding vs. reacting"] },
    { w: "Week 6 — Motivation Design", d: ["Energizers vs. drains", "Motivation Menu", "Morning routine"] },
    { w: "Week 7 — Self-Trust", d: ["Keep promises to self", "Micro-commitments", "Visualization"] },
    { w: "Week 8 — Beat Comparison", d: ["Stop comparing", "Rewrite success timeline", "Progress > perfection"] },
  ];
  const p3Weeks = [
    { w: "Week 9 — Embody Future Self", d: ["Visualization & scripting", "Act “as if” daily"] },
    { w: "Week 10 — Presence", d: ["Confident expression", "Voice & body language"] },
    { w: "Week 11 — Purpose", d: ["Clarify your ‘why’", "Align to bigger mission"] },
    { w: "Week 12 — Integration", d: ["Review growth", "Long-term mindset plan", "Closing ritual"] },
  ];

  const planIntros = {
    starter: {
      introTitle: "Starter Package — Break Free from Self-Doubt (4 Weeks)",
      introBody:
        "First, I want to acknowledge you for choosing this journey. Over four focused weeks, we’ll build awareness, reset limiting beliefs, and create the foundation for real confidence. You’ll leave lighter, clearer, and ready for what’s next.",
      outcomes: [
        "Clarity on where you are vs. where you want to be",
        "Identity reset: new empowering self-concepts",
        "Release tools for fear and doubt",
        "Resilience reframes + your Confidence Bank started",
      ],
    },
    pro: {
      introTitle: "Pro Package — Confidence & Motivation (8 Weeks)",
      introBody:
        "Across eight weeks, we’ll go deeper—anchoring new identity, emotional mastery, and sustainable motivation. You’ll design routines that keep you moving long after the program.",
      outcomes: [
        "Emotional rewiring and daily reset ritual",
        "A personalized Motivation Menu + morning routine",
        "Micro-commitments that build self-trust fast",
        "Confidence anchored in progress, not perfection",
      ],
    },
    elite: {
      introTitle: "Elite Package — The Limitless 12-Week Transformation",
      introBody:
        "The complete journey from doubt to unshakable confidence. We’ll embody your future self, refine your presence and purpose, and integrate a long-term mindset plan so the change sticks.",
      outcomes: [
        "Future-self embodiment and confident presence",
        "Purpose clarity and meaning in your path",
        "Integrated long-term habits and mindset systems",
        "Full launch into your limitless identity",
      ],
    },
  };

  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      duration: "4 Weeks",
      price: "$1,000",
      desc: "Kickstart clarity and confidence.",
      features: [
        "4 weekly 1:1 sessions",
        "Identity reset & awareness tools",
        "Release techniques + journaling guidance",
      ],
      weeks: p1Weeks,
      ctaLabel: "Kickstart My Reset",
      stats: { weeks: "4", sessions: "4", focus: "Self-belief foundation" },
      intro: planIntros.starter,
    },
    {
      id: "pro",
      name: "Pro Package",
      duration: "8 Weeks",
      price: "$2,500",
      desc: "Deeper change with motivation and accountability.",
      features: [
        "8 weekly 1:1 sessions",
        "Identity reset + emotional rewiring",
        "Motivation menu & mindset routines",
        "Accountability plan",
      ],
      weeks: [...p1Weeks, ...p2Weeks],
      ctaLabel: "Level Me Up",
      stats: { weeks: "8", sessions: "8", focus: "Confidence + motivation" },
      intro: planIntros.pro,
      popular: true,
    },
    {
      id: "elite",
      name: "Elite Package",
      duration: "12 Weeks",
      price: "Contact for Details",
      desc: "Full transformation across all 3 phases.",
      features: [
        "12 weekly 1:1 sessions",
        "Presence & confidence mastery",
        "Purpose alignment & long-term plan",
        "Priority support",
      ],
      weeks: [...p1Weeks, ...p2Weeks, ...p3Weeks],
      ctaLabel: "Go Elite Mode",
      stats: { weeks: "12", sessions: "12", focus: "Identity + purpose" },
      intro: planIntros.elite,
    },
  ];

  
  const faqs = [
    {
      q: "What is the Limitless Mindset Coaching Program?",
      a:
        "A 12-week transformational coaching journey designed to help you break limiting beliefs, rewire your mindset, and embody your highest identity. Each session focuses on deep, lasting change, supported by reflection workbooks and guided journaling prompts.",
    },
    {
      q: "Who is this program for?",
      a:
        "This program is ideal for young adults (ages 25–35) who feel stuck, disconnected, or held back by self-doubt — and who are ready to step into their purpose with confidence, emotional clarity, and direction.",
    },
    {
      q: "How does the program work?",
      a:
        "You’ll meet weekly for 1:1 coaching sessions (45 minutes each). Each session includes connection, core teaching, co-creation, and integration. Between sessions, reflection workbooks and journaling prompts help you apply the lessons and track your growth.",
    },
    {
      q: "What are the features and benefits of the program?",
      a:
        "Features: 12 weekly 1:1 coaching sessions (45 minutes each), reflection workbooks, guided journaling prompts, and a step-by-step 12-module program. Benefits: Break old patterns, build an unshakable identity, gain emotional clarity, confidence, and resilience, and step fully into purpose-driven living.",
    },
    {
      q: "Do I need coaching experience before joining?",
      a:
        "No experience is required. The program is beginner-friendly but goes deep, adapting to your level of self-awareness and growth readiness.",
    },
    { q: "Is it 1:1 or group coaching?", a: "Currently, this is a 1:1 coaching experience, allowing for personalized attention and tailored guidance." },
    {
      q: "What results can I expect?",
      a:
        "While every journey is unique, clients often experience increased confidence, emotional clarity, a stronger sense of self, and alignment with purpose. Lasting transformation depends on active engagement and consistent practice of the tools.",
    },
    {
      q: "How are the program tiers explained?",
      a:
        "The Limitless Mindset Coaching Program offers different levels of depth and support. To ensure you select the tier that aligns best with your goals, we explore all options during your free 30-minute consultation.",
    },
    {
      q: "Are there any disclaimers?",
      a:
        "Results may vary. The Limitless Mindset Coaching Program is designed for personal development, but outcomes depend on your engagement, consistency, and application of the tools. This program is not a substitute for medical, psychological, or professional advice.",
    },
    {
      q: "Do you offer a guarantee?",
      a:
        "Your satisfaction matters. If after your first session you feel the program isn’t a fit, we can discuss next steps or a partial refund for unused sessions. Lasting results require commitment and active participation in the program exercises.",
    },
  ];

  const taglines = [
    "Remember: Stay Limitless.",
    "Unleash Your Limitless Self.",
    "Discipline. Mindset. Motivation.",
    "Showing up is the hardest part — and it’s worth it.",
  ];

  // UI
  const [openFAQ, setOpenFAQ] = useState(0);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const openPlan = (plan) => {
    setActivePlan(plan);
    setPlanModalOpen(true);
  };
  const closePlan = () => {
    setPlanModalOpen(false);
    setActivePlan(null);
  };

  const visibleFaqs = faqExpanded ? faqs : faqs.slice(0, 4);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0b1220_35%,#0b1220/96%_60%,#0b1220/90%_100%)]">
      
      <nav className="sticky top-0 z-50 bg-[#0b1220]/85 backdrop-blur border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl btn-gradient text-white grid place-items-center font-bold">
              ∞
            </div>
            <span className="font-display font-bold">Limitless Mindset</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">
              Features
            </a>
            <a href="#pricing" className="hover:opacity-80">
              Packages
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
          </div>
          <a
            href="#cta"
            className="rounded-xl btn-gradient px-4 py-2 text-sm font-medium"
          >
            Free Consult
          </a>
        </div>
      </nav>

      
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 animated-gradient opacity-90" />

        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
          {/* Left column */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs tracking-wider uppercase px-3 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur">
              12-Week Transformation
            </span>

            <h1 className="font-display mt-5 text-4xl sm:text-5xl font-bold leading-tight drop-shadow">
              {headline}
            </h1>
            <p className="mt-4 text-lg text-white/90">{subheadline}</p>

            <div className="mt-8 rounded-2xl card-gradient p-6 border border-white/10 text-white shadow-md">
              <h2 className="font-display text-xl font-semibold">
                {altHeadline}
              </h2>
              <p className="mt-2 text-white/85">{altSubheadline}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="rounded-xl btn-gradient px-5 py-3 text-sm font-medium shadow-lg"
                >
                  View Packages
                </a>
                <a
                  href="#features"
                  className="rounded-xl btn-dark px-5 py-3 text-sm font-medium"
                >
                  See How It Works
                </a>
              </div>
            </div>

           
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/85">
              {taglines.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-5">
            <div className="relative h-80 lg:h-full rounded-3xl card-gradient border border-white/10 overflow-hidden shadow-lg">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/85">Future Self Embodiment</p>
                  <p className="mt-2 text-2xl font-display font-semibold">
                    Step into your next identity
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Identity Reset",
                    "Emotional Rewiring",
                    "Motivation Menu",
                    "Confidence Bank",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-xl btn-dark p-3 text-sm border border-white/10"
                    >
                      <span className="font-medium text-white">{t}</span>
                      <div className="mt-1 text-white/70">Ready-to-use tools</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="bg-[#0e162b] section-anchor">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeader
            invert
            title="What You Can Expect"
            subtitle="Bridge the gap between where you are and where you want to be with identity, emotion and daily tools."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 card-gradient p-6 shadow-sm hover:glow transition text-white"
              >
                <div className="w-11 h-11 rounded-xl btn-gradient grid place-items-center text-xl">
                  {f.icon}
                </div>
                <h4 className="mt-4 font-display font-semibold">{f.title}</h4>
                <p className="mt-2 text-sm text-white/85">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="pricing" className="bg-[#0b1220] section-anchor">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeader
            invert
            title="Packages & Pricing"
            subtitle="Choose the journey that fits your goals — each includes weekly 1:1 coaching and guided exercises."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.id}
                className={`rounded-2xl border card-gradient p-6 shadow-sm relative text-white ${
                  p.popular ? "ring-2 ring-fuchsia-400/60" : "border-white/10"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-4 rounded-full px-3 py-1 text-xs font-medium border border-fuchsia-400/70 bg-[#0b1220] text-fuchsia-200">
                    Most Popular
                  </span>
                )}
                <h4 className="font-display text-lg font-semibold">{p.name}</h4>
                <p className="text-sm text-white/75">{p.duration}</p>
                <p className="mt-3 text-3xl font-display font-bold">{p.price}</p>
                <p className="mt-2 text-sm text-white/85">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openPlan(p)}
                  className={`mt-6 inline-block w-full text-center rounded-xl px-5 py-3 text-sm font-medium shadow ${
                    p.popular ? "btn-gradient" : "btn-dark"
                  }`}
                >
                  {p.ctaLabel}
                </button>
                <p className="mt-3 text-xs text-white/70">
                  Taxes may apply. Payment plans available on request.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#0e162b] section-anchor">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeader
            invert
            title="Frequently Asked Questions (FAQ)"
            subtitle="Everything you need to know before you get started."
          />
          <div className="mt-6 grid gap-3">
            {visibleFaqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                id={idx}
                openId={openFAQ}
                setOpenId={setOpenFAQ}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setFaqExpanded(!faqExpanded)}
              className="rounded-xl px-5 py-3 text-sm font-medium border border-white/25 text-white bg-white/10 hover:bg-white/15"
            >
              {faqExpanded ? "See less" : "See more"}
            </button>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-[#0b1220] text-white section-anchor">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center btn-gradient shadow-2xl">
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h3 className="font-display text-3xl md:text-4xl font-bold drop-shadow-sm">
              Ready to Step Into Your{" "}
              <span className="text-amber-200">Limitless Self?</span>
            </h3>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Book a free 30-minute consultation. Together we’ll map your goals,
              choose the right package, and design a roadmap toward unshakable
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="btn-dark rounded-xl px-6 py-3 text-sm md:text-base font-medium glow"
              >
                Explore Packages
              </a>
              <a
                href="#"
                className="btn-gradient rounded-xl px-6 py-3 text-sm md:text-base font-medium shadow-lg"
              >
                Book Free Call
              </a>
            </div>

            <p className="mt-6 text-sm text-white/80 italic">
              Showing up is the hardest part — but it’s worth it.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b1220] text-white/80">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl btn-gradient text-white grid place-items-center font-bold">
              ∞
            </div>
            <span className="font-display font-semibold">
              Limitless Mindset
            </span>
          </div>
          <p>© {year} Limitless Mindset • All rights reserved</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#cta">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <PlanModal open={planModalOpen} onClose={closePlan} plan={activePlan} />
    </main>
  );
}
