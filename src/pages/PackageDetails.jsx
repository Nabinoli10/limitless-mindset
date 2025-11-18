import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { plans } from "./Packages";
import ytImage from "../assets/YT.jpg";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id === id);

  const focusMap = {
    starter: "Self-belief foundation",
    pro: "Confidence + motivation",
    elite: "Identity + purpose",
  };
  const primaryFocus = focusMap[plan?.id] || "Personal Growth";

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col items-center justify-center p-10">
        <p className="text-lg mb-4">Package not found.</p>
        <button
          onClick={() => navigate("/packages")}
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col pb-20">
      {/* Header */}
      <header className="p-6 bg-[#2A2A2A] flex justify-between items-center shadow-lg border-b border-yellow-400/30">
        <h1 className="text-xl font-bold text-yellow-400 tracking-wide">LIMITLESS IVAN</h1>
        <Link to="/packages" className="hover:text-yellow-400 transition">
          ← Back to Packages
        </Link>
      </header>

      {/* Hero Image (smaller size) */}
      <div className="w-full overflow-hidden mt-6 rounded-2xl shadow-2xl border border-yellow-400/30 max-h-[350px]">
        <img
          src={ytImage}
          alt="Break limits unlock your inner strength"
          className="w-full h-full object-cover"
        />
      </div>

   <section className="px-6 md:px-16 py-16 bg-gray-900 text-white">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400 drop-shadow-lg">
    Program at a Glance
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Duration</h3>
      <p className="text-gray-300 text-lg">{plan.duration}</p>
    </div>

    <div className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Sessions</h3>
      <p className="text-gray-300 text-lg">{plan.sessions}</p>
    </div>

    <div className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Primary Focus</h3>
      <p className="text-gray-300 text-lg">{plan.focus}</p>
    </div>
  </div>
</section>


{/* Video Section */}
<section className="px-6 md:px-12 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
    Journey of Transformation
  </h2>
  <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
    Witness the mindset shift in motion. This is where breakthroughs begin.
  </p>

  <div className="flex justify-center">
    <div className="w-[360px] h-[640px] rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400">
      <video
        controls
        className="w-full h-full object-cover bg-black"
      >
        <source src="" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>


<section className="px-6 md:px-12 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
    Ready to Break Limits?
  </h2>
  <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
    Let’s talk about your transformation. Book a free consultation and take the first step toward your limitless self.
  </p>
  <button
    onClick={() => alert("Booking functionality coming soon!")}
    className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
  >
    Book Free Consultation
  </button>
</section>


      <footer className="bg-[#2A2A2A] text-white px-6 md:px-12 py-10 border-t border-yellow-400/20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h4 className="text-yellow-400 font-bold text-lg mb-2">Limitless Ivan</h4>
      <p className="text-gray-400 text-sm">
        Empowering transformation through mindset, identity, and emotional mastery.
      </p>
    </div>
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/limitless_ivan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:text-yellow-300 transition"
      >
        Instagram
      </a>
      <a
        href="https://www.youtube.com/@limitlessivan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:text-yellow-300 transition"
      >
        YouTube
      </a>
    </div>
  </div>
  <p className="text-gray-500 text-xs mt-6 text-center">
    © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
  </p>
</footer>

    </div>
  );
}
