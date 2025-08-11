import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-gray-900 h-screen fixed left-0 top-0 flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        </div>

        <nav className="flex-1 px-4">
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className={`block py-3 px-4 rounded mb-2 transition ${
              isActive("/admin")
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/portfolio"
            onClick={() => setIsOpen(false)}
            className={`block py-3 px-4 rounded mb-2 transition ${
              isActive("/admin/portfolio")
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/admin/contact"
            onClick={() => setIsOpen(false)}
            className={`block py-3 px-4 rounded mb-2 transition ${
              isActive("/admin/contact")
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/admin/upload"
            onClick={() => setIsOpen(false)}
            className={`block py-3 px-4 rounded mb-2 transition ${
              isActive("/admin/upload")
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            Upload
          </Link>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
