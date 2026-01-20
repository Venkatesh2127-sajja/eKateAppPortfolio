import { motion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const useCases = [
  {
    title: "🎂 Birthday Parties",
    real: "Manual calls, unclear pricing, no confirmation",
    solution: "Predefined packages, verified vendors, instant booking",
  },
  {
    title: "💍 Weddings",
    real: "Vendor trust issues, coordination overload",
    solution: "Admin-approved vendors, advance booking, monitoring",
  },
  {
    title: "🏢 Corporate Events",
    real: "Invoice issues, reliability concerns",
    solution: "Standardized services, booking history, accountability",
  },
  {
    title: "🎉 House Warming",
    real: "Last-minute planning, no fixed menu",
    solution: "Quick booking, customizable packages",
  },
  {
    title: "🎓 College Events",
    real: "Budget constraints, vendor reliability",
    solution: "Transparent pricing, verified caterers",
  },
  {
    title: "🕌 Religious Functions",
    real: "Traditional menu mismatch, trust issues",
    solution: "Specialized vendors, menu clarity",
  },
];

export default function RealWorldUseCases() {
  const scrollRef = useRef(null);

  // Mouse wheel → horizontal scroll
  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <AnimatedSection>
      <section className="py-28 px-6 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Problems & Our Solution
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              How our platform solves real catering challenges across different
              types of events.
            </p>
          </div>

          {/* Scroll Area */}
          <div className="relative">
            {/* Gradient left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />

            {/* Gradient right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            {/* Scroll container */}
            <div
              ref={scrollRef}
              onWheel={handleWheel}
              className="
                flex gap-8
                overflow-x-auto overflow-y-hidden
                hide-scrollbar
                pt-6 pb-10
                snap-x snap-mandatory
              "
            >
              {useCases.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="
                    min-w-[320px] md:min-w-[360px]
                    snap-center
                    p-8 rounded-2xl
                    bg-slate-900
                    border border-slate-800
                    hover:border-orange-500/60
                    hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]
                    hover:scale-[1.02]
                    transition-transform
                  "
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-red-400 mb-3">
                    <span className="font-semibold">Real World:</span>{" "}
                    {item.real}
                  </p>

                  <p className="text-green-400">
                    <span className="font-semibold">Our Solution:</span>{" "}
                    {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Hint */}
            <p className="text-center text-slate-500 text-sm mt-6">
              ← Swipe or scroll to explore more →
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
