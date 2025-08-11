import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "about", label: "회사소개" },
    { path: "process", label: "프로세스" },
    { path: "portfolio", label: "포트폴리오" },
    { path: "differentiation", label: "차별성" },
    { path: "contact", label: "문의하기" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080A0C]/70 backdrop-blur-sm h-[76px] flex items-center justify-between px-6 md:px-20 border-b border-white/10">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Video Crew" className="h-8" />
        </NavLink>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 font-medium opacity-80 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `hover:opacity-100 transition ${
                isActive ? "text-white opacity-100" : "text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <Menu size={26} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[76px] left-0 w-full bg-[#080A0C] flex flex-col items-center py-6 space-y-6 md:hidden animate-slide-down">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-white text-lg hover:opacity-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
