import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ytCover from "../assets/yt-cover.jpg";

export const plans = [
  { 
    id: "starter",
    name: "Starter Package",
    duration: "4 Weeks",
    price: "$1,000",
    sessions: "4 1:1 Sessions",
    focus: "Self-belief foundation",
    features: [
      "4 weekly 1:1 sessions",
      "Identity reset & awareness tools",
      "Release techniques + journaling guidance"
    ]
  },
  { 
    id: "pro",
    name: "Pro Package",
    duration: "8 Weeks",
    price: "$2,500",
    sessions: "8 1:1 Sessions",
    focus: "Confidence + motivation",
    features: [
      "8 weekly 1:1 sessions",
      "Identity reset + emotional rewiring",
      "Motivation menu & mindset routines",
      "Accountability plan"
    ],
    popular: true
  },
  { 
    id: "elite",
    name: "Elite Package",
    duration: "12 Weeks",
    price: "Contact for Details",
    sessions: "12 1:1 Sessions",
    focus: "Identity + purpose",
    features: [
      "12 weekly 1:1 sessions",
      "Presence & confidence mastery",
      "Purpose alignment & long-term plan",
      "Priority support"
    ]
  },
];

const faqs = [
  { q: "What is the Limitless Mindset Coaching Program?", a: "A 12-week transformational coaching journey designed to help you break limiting beliefs, rewire your mindset, and embody your highest identity." },
  { q: "Who is this program for?", a: "Ideal for young adults (25–35) who feel stuck, disconnected, or held back by self-doubt and want to step into their purpose with confidence." },
  { q: "How does the program work?", a: "Weekly 1:1 coaching sessions (45 mins), guided journaling, reflection workbooks, and practical tools to track growth." },
  { q: "Do I need experience?", a: "No experience required. The program adapts to your level of self-awareness and growth readiness." },
];

function AccordionItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-400/30 bg-gray-800 transition-shadow hover:shadow-2xl">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-yellow-400 px-6 py-5 focus:outline-none"
        onClick={toggle}
      >
        <span className="text-lg md:text-xl">{question}</span>
        <span className="text-2xl">{isOpen ? "–" : "+"}</span>
      </button>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden px-6 text-gray-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        {answer}
      </div>
    </div>
  );
}

export default function Packages() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col">
      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-8 py-4 bg-[#2A2A2A] shadow-md">
        <Link to="/" className="text-yellow-400 text-xl font-bold tracking-wide">
          LIMITLESS IVAN
        </Link>
        <Link to="/" className="hover:text-yellow-400 transition">
          ← Back to Home
        </Link>
      </header>

      {/* BANNER */}
      <div className="relative w-full">
        <img src={ytCover} alt="Break limits" className="w-full h-auto object-contain" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
      </div>

      {/* PACKAGES */}
      <section className="px-10 py-16 flex-grow">
        <h2 className="text-4xl font-bold text-yellow-400 mb-3">Coaching Packages</h2>
        <p className="text-gray-300 max-w-2xl mb-10">
          Choose a plan that matches your goals — all include weekly 1:1 coaching and mindset transformation tools.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative rounded-2xl p-8 border transition hover:shadow-xl ${plan.popular ? "border-yellow-400 ring-2 ring-yellow-400/60 bg-[#2E2E2E]" : "border-white/10 bg-[#2A2A2A]"}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-black shadow">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-yellow-400 text-xl mb-1">{plan.price}</p>
              <p className="text-gray-300 mb-1">{plan.duration}</p>

              {/* Newly added details */}
              <p className="text-gray-300 text-sm mb-1">{plan.sessions}</p>
              <p className="text-gray-400 text-xs italic mb-4">{plan.focus}</p>

              <ul className="space-y-2 mb-6 text-white/85">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <button
                onClick={() => navigate(`/package/${plan.id}`)}
                className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition shadow-lg"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Empower Your Journey */}
      <section className="px-6 md:px-16 py-16 bg-gray-900 border-t border-yellow-400/30">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10 text-center drop-shadow-lg">
          Empower Your Journey
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Here are the answers to the questions most people ask when starting their transformation. Take the first step with clarity and confidence.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openFAQ === idx}
              toggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A2A2A] text-white px-6 md:px-12 py-12 border-t border-yellow-400/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-2">Limitless Ivan</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering transformation through mindset, identity, and emotional mastery. Join the movement and become limitless.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.instagram.com/limitless_ivan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@limitlessivan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              YouTube
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-8 text-center">
          © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
