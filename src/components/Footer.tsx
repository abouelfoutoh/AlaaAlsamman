import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-yellow-500 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">علاء السمان</h3>
                <p className="text-yellow-500 font-semibold">رمز الصقر</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              معاً من أجل مستقبل أفضل لدار السلام
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  من هو المرشح
                </Link>
              </li>
              <li>
                <Link
                  to="/program"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  البرنامج الانتخابي
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">للتواصل عبر الحملة</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">info@alaalsaman.com</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="فيسبوك"
                >
                  <Facebook className="h-5 w-5 text-yellow-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="تويتر"
                >
                  <Twitter className="h-5 w-5 text-yellow-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label="إنستجرام"
                >
                  <Instagram className="h-5 w-5 text-yellow-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 علاء السمان - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
