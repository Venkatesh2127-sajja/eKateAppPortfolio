import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "User Registration & OTP",
    desc: "User signs up and verifies identity via email OTP.",
    icon: "📩",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Authentication & JWT",
    desc: "After login, a secure JWT token is issued.",
    icon: "🔐",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "API Gateway Entry",
    desc: "All requests pass through API Gateway.",
    icon: "🌐",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Role Validation",
    desc: "Role-based access (Admin, Vendor, Customer) is enforced.",
    icon: "🛂",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Service Routing",
    desc: "Requests are routed to the correct microservice.",
    icon: "🧩",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Secure Response",
    desc: "Response is returned safely back to the client.",
    icon: "✅",
    color: "from-green-500 to-emerald-600",
  },
];

export default function BackendFlow() {
  return (
    <AnimatedSection>
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Backend Flow & Security
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              A secure, production-grade request flow designed with scalability
              and role-based access control.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-orange-500/40 via-slate-700 to-transparent" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Step indicator */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full
                    bg-gradient-to-br ${step.color}
                    flex items-center justify-center text-white text-xl shadow-lg`}
                  >
                    {step.icon}
                  </div>

                  {/* Content card */}
                  <div
                    className="
                      flex-1 p-6 rounded-2xl
                      bg-slate-900 border border-slate-800
                      hover:border-orange-500/50
                      hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]
                      transition
                    "
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
