import { motion } from "framer-motion";
import logo from "../assets/ekateapp-logo.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Logo */}
          <motion.img
            src={logo}
            alt="eKateApp Logo"
            className="w-24 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Smart Catering <br />
            <span className="text-orange-500">Booking Platform</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-slate-400 max-w-xl text-lg"
          >
            A production-ready catering platform that simplifies bookings for
            birthdays, weddings, and corporate events with secure authentication,
            vendor approvals, and role-based dashboards.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-6"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">
              Explore Platform
            </button>

            <button className="border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition">
              View GitHub
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Main card */}
          <div className="relative bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-800">
            <img
              src={logo}
              alt="eKateApp"
              className="w-64 mx-auto"
            />
          </div>

          {/* Floating stats */}
          <div className="absolute -left-6 top-12 bg-slate-900 px-6 py-4 rounded-xl shadow border border-slate-800">
            <p className="text-white font-bold text-lg">500+</p>
            <p className="text-slate-400 text-sm">Bookings</p>
          </div>

          <div className="absolute -right-6 bottom-12 bg-slate-900 px-6 py-4 rounded-xl shadow border border-slate-800">
            <p className="text-white font-bold text-lg">100+</p>
            <p className="text-slate-400 text-sm">Verified Vendors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
