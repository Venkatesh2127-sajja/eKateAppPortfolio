import { motion } from "framer-motion";
import logo from "../assets/ekateapp-logo.png";

export default function Footer() {
  return (
    <footer id="contact"className="relative bg-slate-950 text-slate-300 pt-24">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <img src={logo} alt="eKateApp" className="w-20 mb-4" />
          <h3 className="text-white font-semibold text-lg mb-3">
            eKateApp
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            A smart catering booking platform built with modern microservices,
            secure authentication, and production-ready architecture.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              "About",
              "Dashboard",
              "Backend Flow",
              "Architecture",
              "Tech Stack",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PROJECT HIGHLIGHTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Project Highlights</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>✔ JWT Security & Role-Based Access</li>
            <li>✔ Vendor Approval Workflow</li>
            <li>✔ Microservices Architecture</li>
            <li>✔ Docker & Kubernetes Ready</li>
            <li>✔ Monitoring with Grafana</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>

          <p className="text-sm mb-4">
            Open to backend / full-stack opportunities.
          </p>

          <a
            href="mailto:svenkatesh1021@gmail.com"
            className="inline-block text-orange-400 font-medium hover:underline"
          >
            svenkatesh1021@gmail.com
          </a>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {[
              { name: "GitHub", link: "#" },
              { name: "LinkedIn", link: "#" },
            ].map((social) => (
              <motion.a
                whileHover={{ y: -4 }}
                key={social.name}
                href={social.link}
                className="
                  px-4 py-2 rounded-lg text-sm
                  bg-slate-900 border border-slate-800
                  hover:border-orange-500/50
                  transition
                "
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} eKateApp. All rights reserved.</p>
          <p>Built with ❤️ using React, Spring Boot & Microservices</p>
        </div>
      </div>
    </footer>
  );
}
