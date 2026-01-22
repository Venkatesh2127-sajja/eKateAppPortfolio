import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stacks = [
  {
    title: "Backend",
    color: "from-indigo-500 to-purple-600",
    items: ["Java 17", "Spring Boot", "Spring Security", "JWT"],
    icon: "🧠",
  },
  {
    title: "Microservices",
    color: "from-orange-500 to-red-600",
    items: ["API Gateway", "Eureka Discovery", "Feign Clients"],
    icon: "🧩",
  },
  {
    title: "Frontend",
    color: "from-emerald-500 to-teal-600",
    items: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
  },
  {
    title: "Database",
    color: "from-blue-500 to-cyan-600",
    items: ["MySQL", "JPA / Hibernate"],
    icon: "🗄️",
  },
  {
    title: "DevOps",
    color: "from-pink-500 to-rose-600",
    items: ["Docker", "Kubernetes"],
    icon: "🚀",
  },
  {
    title: "Monitoring",
    color: "from-yellow-500 to-orange-500",
    items: ["Prometheus", "Grafana"],
    icon: "📊",
  },
];

export default function TechStack() {
  return (
    <AnimatedSection>
      <section id="tech"className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              A modern, scalable technology stack chosen to support real-world,
              production-grade catering workflows.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  relative rounded-3xl p-8
                  bg-slate-950 border border-slate-800
                  hover:border-transparent
                  transition
                "
              >
                {/* Gradient border glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stack.color} opacity-0 hover:opacity-20 transition`}
                />

                <div className="relative">
                  <div className="text-4xl mb-4">{stack.icon}</div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {stack.title}
                  </h3>

                  <ul className="space-y-2">
                    {stack.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-300 flex items-center gap-2"
                      >
                        <span className="text-green-400">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
