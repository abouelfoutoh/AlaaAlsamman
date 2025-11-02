import { Link, useLocation } from "react-router-dom";
import { Menu, X, } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import falconIcon from "../assets/202505290347354735-removebg-preview.ico";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "من هو المرشح", path: "/about" },
    { name: "البرنامج الانتخابي", path: "/program" },
    { name: "الدائرة الانتخابية", path: "/constituency" },
    { name: "الصور والفيديوهات", path: "/media" },
    { name: "الأخبار", path: "/news" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              <img
                src={falconIcon}
                alt="رمز الصقر"
                className="w-11.5 h-11.5 object-contain"
              />
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-800">علاء السمان</h1>
              <p className="text-sm text-yellow-600 font-semibold">رمز الصقر</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-yellow-500/20 text-yellow-700 font-semibold"
                    : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md mb-1 transition-all ${
                  isActive(item.path)
                    ? "bg-yellow-500/20 text-yellow-700 font-semibold"
                    : "text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
