// export default function Monitoring() {
//   return (
//     <section className="py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Monitoring & Observability
//         </h2>

//         <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
//           To ensure reliability and performance, the platform includes monitoring
//           and observability practices commonly used in production systems.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-6 bg-white rounded-xl shadow">
//             <h3 className="text-xl font-semibold mb-3">📊 Metrics</h3>
//             <ul className="text-gray-700 space-y-2">
//               <li>• Service health & uptime</li>
//               <li>• API response times</li>
//               <li>• Request & error rates</li>
//             </ul>
//           </div>

//           <div className="p-6 bg-white rounded-xl shadow">
//             <h3 className="text-xl font-semibold mb-3">📈 Dashboards</h3>
//             <ul className="text-gray-700 space-y-2">
//               <li>• Centralized monitoring dashboard</li>
//               <li>• Per-service performance view</li>
//               <li>• System-wide visibility</li>
//             </ul>
//           </div>

//           <div className="p-6 bg-white rounded-xl shadow">
//             <h3 className="text-xl font-semibold mb-3">🚨 Alerts</h3>
//             <ul className="text-gray-700 space-y-2">
//               <li>• High error rate alerts</li>
//               <li>• Service downtime detection</li>
//               <li>• Faster issue response</li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 text-center text-gray-600">
//           These practices help detect issues early, reduce downtime,
//           and maintain a reliable experience for customers and vendors.
//         </div>
//       </div>
//     </section>
//   );
// }
import AnimatedSection from "./AnimatedSection";

export default function Monitoring() {
  return (
    <AnimatedSection>
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Monitoring & Observability
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Metrics", "Dashboards", "Alerts"].map((t, i) => (
              <div
                key={i}
                className="p-8 bg-slate-900 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  {t}
                </h3>
                <p className="text-slate-400">
                  Production-level monitoring ensures reliability and quick issue detection.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
