// export default function About() {
//   return (
//     <section className="py-20 px-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4">About the Project</h2>

//         <p className="text-gray-700 leading-relaxed">
//           This project is a real-world catering booking platform inspired by
//           applications like Swiggy and Zomato, designed specifically for event
//           catering. It solves problems such as manual booking, lack of vendor
//           verification, and poor booking management.
//         </p>
//       </div>
//     </section>
//   );
// }
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection>
      <section id="about"className="py-28 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About the Project
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            This catering platform digitizes the complete event-booking workflow.
            Customers can browse menus and book events, vendors manage packages
            and availability, and admins control approvals and system health.
            The system is designed with real-world scalability and security in mind.
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
