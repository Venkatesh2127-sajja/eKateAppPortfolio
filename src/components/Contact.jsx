// export default function Contact() {
//   return (
//     <section className="py-20 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>

//       <p className="mb-6">
//         Interested in discussing this project or opportunities?
//       </p>

//       <p className="font-semibold">
//         📧 svenkatesh1021@gmail.com
//       </p>
//     </section>
//   );
// }
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection>
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Let’s Build Something Great
        </h2>

        <p className="text-slate-400 mb-8">
          Open to backend / full-stack opportunities.
        </p>

        <p className="text-lg font-semibold text-orange-400">
          📧 svenkatesh1021@gmail.com
        </p>
      </section>
    </AnimatedSection>
  );
}
