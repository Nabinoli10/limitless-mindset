import React from "react";
import { Link } from "react-router-dom";
import ivanLogo from "../assets/ivan.jpg";
import pfp from "../assets/pfp.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-white">

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-6 md:px-14 py-4 bg-[#161616] shadow-lg border-b border-yellow-500/30 sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
  src={ivanLogo}
  alt="Limitless Ivan Logo"
  className="h-16 w-32 object-cover rounded-lg border-2 border-yellow-500 shadow-lg"
/>

          <div className="">
            <h2 className="text-xl font-semibold text-white tracking-wide leading-tight">
              Limitless <span className="text-yellow-400 font-bold">Ivan</span>
            </h2>
            <p className="text-xs text-yellow-300 uppercase tracking-widest">Mindset Coach</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/packages" className="hover:text-yellow-400 transition">Packages</Link>
        </nav>
      </header>


      {/* HERO */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 px-10 py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <img
          src={pfp}
          alt="Ivan Profile"
          className="w-72 h-72 object-cover rounded-full border-[6px] border-yellow-500 shadow-[0_0_25px_rgba(255,204,0,0.5)]"
        />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400 drop-shadow-lg">
            Transform Your Life
            <span className="text-white block mt-2">With Limitless Ivan</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Personalized transformation coaching to elevate your mindset, identity, confidence, and emotional mastery.
          </p>
          <Link
            to="/packages"
            className="inline-block mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Be Limitless
          </Link>
        </div>
      </section>


      {/* TRANSFORMATION TOOLS SECTION */}
      <section className="w-full px-8 md:px-14 py-24 bg-[#141414] text-center border-t border-yellow-500/20">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 tracking-tight">Stop Surviving, Start Thriving</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Real transformation begins within. Rewire your identity, emotions, and mindset for lasting success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Identity Reset", desc: "Redefine who you are and rewrite your story.", icon: "🧠" },
            { title: "Emotional Rewiring", desc: "Master emotional control and resilience.", icon: "💫" },
            { title: "Motivation Menu", desc: "Build daily rituals that fuel growth.", icon: "🔥" },
            { title: "Confidence Bank", desc: "Build unshakable belief in yourself.", icon: "💪" },
          ].map((tool, i) => (
            <div
              key={i}
              className="relative bg-[#1E1E1E] p-8 rounded-3xl shadow-lg border border-yellow-500/10 
              hover:border-yellow-500/40 hover:shadow-yellow-500/30 hover:scale-[1.04] 
              transition-all duration-300 group"
            >
              <div className="text-5xl mb-6">{tool.icon}</div>
              <h4 className="text-2xl font-bold text-yellow-400 mb-3">{tool.title}</h4>
              <p className="text-gray-300 text-base leading-relaxed">{tool.desc}</p>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-yellow-400 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </section>


      {/* VIDEO SECTION */}
      <section className="px-8 md:px-14 py-20 bg-[#101010] text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Journey to Being Limitless</h2>
        <div className="flex justify-center">
          <iframe
            className="rounded-2xl shadow-lg border-4 border-yellow-500"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/BFn1ilXVPvs"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      {/* REELS / CONNECT */}
      <section className="px-8 md:px-14 py-20 bg-[#141414] text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Let’s Connect</h2>
        <a href="https://www.instagram.com/limitless_ivan/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <video
            src="/combined.mp4"
            autoPlay
            loop
            controls
            className="rounded-2xl shadow-lg border-4 border-yellow-500"
            style={{ width: "360px", height: "640px", objectFit: "cover" }}
          />
        </a>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#101010] text-white px-6 md:px-14 py-10 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-yellow-400 font-bold text-lg mb-2">Limitless Ivan</h4>
            <p className="text-gray-400 text-sm">
              Elevating mindset, identity, and emotional mastery for life transformation.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/limitless_ivan/" className="text-yellow-400 hover:text-yellow-300 transition">Instagram</a>
            <a href="https://www.youtube.com/@limitlessivan" className="text-yellow-400 hover:text-yellow-300 transition">YouTube</a>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center">
          © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
