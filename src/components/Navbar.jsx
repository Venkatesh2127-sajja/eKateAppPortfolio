import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/ekateapp-logo.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Architecture", href: "#architecture" },
  { name: "Tech Stack", href: "#tech" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 right-0 z-50
        bg-slate-950/80 backdrop-blur
        border-b border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="eKateApp" className="w-8" />
          <span className="text-white font-semibold text-lg">
            eKateApp
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-orange-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="
              bg-orange-500 hover:bg-orange-600
              text-white px-5 py-2 rounded-lg
              font-medium transition
            "
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-orange-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
                mt-2 bg-orange-500
                text-white px-4 py-2 rounded-lg
                text-center font-medium
              "
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
