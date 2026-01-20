import AnimatedSection from "./AnimatedSection";

export default function ArchitectureSummary() {
  const points = [
    {
      title: "API Gateway",
      desc: "Single entry point handling routing, JWT validation, and access control.",
      icon: "🌐",
    },
    {
      title: "Microservices",
      desc: "Auth, Vendor, Customer, Menu, and Booking services are independently deployable.",
      icon: "🧩",
    },
    {
      title: "Secure Communication",
      desc: "Services communicate using REST APIs with role-based authorization.",
      icon: "🔐",
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Architecture Overview
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mb-16">
            The platform follows a scalable microservices architecture designed
            for security, flexibility, and independent deployments.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {points.map((p, i) => (
              <div
                key={i}
                className="p-8 bg-slate-950 rounded-2xl border border-slate-800
                           hover:border-orange-500 hover:scale-105 transition"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
