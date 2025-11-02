import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import candidateImage from "@/assets/202505290347354735-removebg-preview.png";
import { useEffect, useState } from "react";
import { GiEagleHead } from "react-icons/gi";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const electionDate = new Date("2025-11-10T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = electionDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: MapPin,
      title: "الدائرة الانتخابية",
      description: "مركز دار السلام",
    },
    {
      icon: Users,
      title: "رقم المرشح",
      description: "1",
    },
    {
      icon: GiEagleHead,
      title: "الرمز الانتخابي",
      description: "الصقر",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1A2F] to-[#1E6091] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-pulse bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#D4AF37]/30">
                <span className="text-[#D4AF37] font-bold">مرشح مجلس النواب المصري</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#D4AF37]">
                علاء السمان
              </h1>
              
              <p className="text-2xl mb-4 text-[#D4AF37]/90">
                رقم <span className="font-bold text-white">1</span> - رمز <span className="font-bold text-white">الصقر</span>
              </p>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                معاً من أجل مستقبل أفضل لدار السلام
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#c49e2d] text-black font-bold text-lg shadow-lg transition-all duration-300"
                >
                  <Link to="/program">
                    اقرأ البرنامج الانتخابي
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold text-lg transition-all duration-300"
                >
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full"></div>
                <img
                  src={candidateImage}
                  alt="علاء السمان"
                  className="relative rounded-2xl shadow-strong w-full max-w-md border-4 border-[#D4AF37]/30 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-[#f8f9fa] py-12 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A4D8F]">
            العد التنازلي ليوم الانتخابات
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: timeLeft.days, label: "يوم" },
              { value: timeLeft.hours, label: "ساعة" },
              { value: timeLeft.minutes, label: "دقيقة" },
              { value: timeLeft.seconds, label: "ثانية" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-[#1A4D8F] mb-2">
                  {item.value}
                </div>
                <div className="text-gray-500 font-semibold">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1A4D8F]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1A4D8F]/20">
                  <item.icon className="h-8 w-8 text-[#1A4D8F]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A4D8F]">{item.title}</h3>
                <p className="text-2xl font-bold text-[#D4AF37]">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#E9EEF5] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#1A4D8F]">رؤيتنا</h2>
            <Card className="p-8 shadow-lg bg-white border border-[#D4AF37]/30">
              <p className="text-xl leading-relaxed text-gray-700">
                نؤمن بأن التنمية الحقيقية تبدأ من تحسين حياة المواطنين في الصحة والتعليم والبنية التحتية.
                نسعى لبناء مستقبل أفضل لأبنائنا من خلال برنامج شامل يلبي احتياجات جميع فئات المجتمع
                ويضع دار السلام على خريطة التنمية الوطنية.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A1A2F] to-[#1E6091] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-[#D4AF37] font-bold mb-6">
            انضم إلينا في رحلة التغيير
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            صوتك أمانة.. اختيارك مسؤولية.. مستقبلنا يبدأ اليوم
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#c49e2d] text-black font-bold text-lg shadow-lg transition-all duration-300"
          >
            <Link to="/program">
              تعرف على البرنامج الانتخابي
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
