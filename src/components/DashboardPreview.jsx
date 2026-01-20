// // export default function DashboardPreview() {
// //   return (
// //     <section className="py-20 px-6 bg-white">
// //       <div className="max-w-6xl mx-auto text-center">
// //         <h2 className="text-3xl font-bold mb-4">
// //           After Login – User Dashboards
// //         </h2>

// //         <p className="text-gray-600 mb-12">
// //           Each user role gets a dedicated dashboard with secure access and
// //           real-time data.
// //         </p>

// //         <div className="grid md:grid-cols-3 gap-8 text-left">
// //           <div className="p-6 rounded-xl shadow bg-gray-50">
// //             <h3 className="text-xl font-semibold mb-2">👨‍💼 Admin Dashboard</h3>
// //             <ul className="text-gray-700 space-y-2">
// //               <li>• Vendor approvals & rejections</li>
// //               <li>• Platform statistics</li>
// //               <li>• Booking monitoring</li>
// //             </ul>
// //           </div>

// //           <div className="p-6 rounded-xl shadow bg-gray-50">
// //             <h3 className="text-xl font-semibold mb-2">🧑‍🍳 Vendor Dashboard</h3>
// //             <ul className="text-gray-700 space-y-2">
// //               <li>• Menu & package management</li>
// //               <li>• Booking requests</li>
// //               <li>• Availability control</li>
// //             </ul>
// //           </div>

// //           <div className="p-6 rounded-xl shadow bg-gray-50">
// //             <h3 className="text-xl font-semibold mb-2">👤 Customer Dashboard</h3>
// //             <ul className="text-gray-700 space-y-2">
// //               <li>• Browse catering services</li>
// //               <li>• Book events</li>
// //               <li>• Track booking status</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import AnimatedSection from "./AnimatedSection";

// export default function DashboardPreview() {
//   return (
//     <AnimatedSection>
//       <section className="py-24 px-6 bg-slate-900">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6 text-white">
//             After Login Experience
//           </h2>

//           <p className="text-slate-400 mb-14">
//             Each role gets a powerful, secure dashboard.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Admin Dashboard",
//                 icon: "👨‍💼",
//                 items: [
//                   "Vendor approvals",
//                   "System analytics",
//                   "Platform monitoring",
//                 ],
//                 color: "from-purple-500 to-indigo-500",
//               },
//               {
//                 title: "Vendor Dashboard",
//                 icon: "🧑‍🍳",
//                 items: [
//                   "Menu management",
//                   "Booking handling",
//                   "Availability control",
//                 ],
//                 color: "from-orange-500 to-red-500",
//               },
//               {
//                 title: "Customer Dashboard",
//                 icon: "👤",
//                 items: [
//                   "Browse services",
//                   "Book events",
//                   "Track status",
//                 ],
//                 color: "from-emerald-500 to-teal-500",
//               },
//             ].map((card, i) => (
//               <div
//                 key={i}
//                 className={`p-8 rounded-2xl bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition`}
//               >
//                 <h3 className="text-2xl font-semibold mb-4 text-white">
//                   {card.icon} {card.title}
//                 </h3>
//                 <ul className="text-white/90 space-y-2">
//                   {card.items.map((it, j) => (
//                     <li key={j}>• {it}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </AnimatedSection>
//   );
// }
import AnimatedSection from "./AnimatedSection";

export default function DashboardPreview() {
  const cards = [
    {
      title: "Admin Dashboard",
      icon: "👨‍💼",
      color: "from-purple-500 to-indigo-500",
      items: ["Vendor approvals", "Platform analytics", "Booking monitoring"],
    },
    {
      title: "Vendor Dashboard",
      icon: "🧑‍🍳",
      color: "from-orange-500 to-red-500",
      items: ["Menu management", "Booking handling", "Availability control"],
    },
    {
      title: "Customer Dashboard",
      icon: "👤",
      color: "from-emerald-500 to-teal-500",
      items: ["Browse services", "Book events", "Track booking status"],
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            After Login Experience
          </h2>

          <p className="text-slate-400 mb-16">
            Each role gets a dedicated, secure dashboard.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl bg-gradient-to-br ${c.color} shadow-2xl hover:scale-105 transition`}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {c.icon} {c.title}
                </h3>
                <ul className="text-white/90 space-y-2 text-left">
                  {c.items.map((it, j) => (
                    <li key={j}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
