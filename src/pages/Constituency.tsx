import { Card } from "@/components/ui/card";
import { MapPin, AlertCircle, CheckCircle, Users, Activity, BookOpen, Briefcase, Leaf, FileText, Building2 } from "lucide-react";

const Constituency = () => {
  const villages = [
    "أولاد خليفة",
    "نجوع مازن",
    "مزاتة شرق",
    "أولاد سالم بحري",
    "أولاد سالم قبلي",
    "أولاد خلف",
    "الخيام",
    "النغاميش",
    "نقنق",
    "الكشح",
    "أولاد طوق غرب",
    "أولاد طوق",
    "عزبة السوالم (عزبة برهام)",
    "البلابيش",
    "عرب العطيات",
    "عرب الصبحة",
    "الجلايلة",
    "عزبة الشيخ بطيخ",
    "عزبة رضوان",
  ];

  const challenges = [
    {
      title: "الخدمات الصحية",
      description: "نقص في الأطباء والمعدات الطبية بالمستشفى المركزي والعيادات القروية",
      solution: "تطوير المستشفى وإنشاء 5 مراكز صحية جديدة وحل أزمة نقص الأطباء",
      icon: Activity, // أيقونة التحدي
      solutionIcon: CheckCircle, // أيقونة الحل
    },
    {
      title: "التعليم",
      description: "كثافة الفصول الدراسية وقلة عدد المدارس والمعاهد المتخصصة",
      solution: "بناء مدارس جديدة وإنشاء معاهد فنية وتحسين أوضاع المعلمين",
      icon: BookOpen,
      solutionIcon: CheckCircle,
    },
    {
      title: "البنية التحتية",
      description: "حالة الطرق المتدهورة ونقص في شبكات الصرف الصحي والغاز الطبيعي",
      solution: "صيانة الطرق واستكمال شبكات المرافق وربط الدائرة بخط السكة الحديد",
      icon: Building2,
      solutionIcon: CheckCircle,
    },
    {
      title: "البطالة",
      description: "نقص فرص العمل المتاحة للشباب وخريجي الجامعات",
      solution: "تأسيس شركة مساهمة للمشروعات التنموية ودعم المشروعات الصغيرة",
      icon: Briefcase,
      solutionIcon: CheckCircle,
    },
    {
      title: "الزراعة",
      description: "ديون المزارعين وضعف البنية الأساسية بالأراضي المستصلحة",
      solution: "مناقشة إسقاط الديون وتقنين أوضاع الظهير الصحراوي وتوصيل المرافق",
      icon: Leaf,
      solutionIcon: CheckCircle,
    },
    {
      title: "الخدمات الحكومية",
      description: "صعوبة الوصول للخدمات الحكومية واضطرار المواطنين للسفر للمحافظة",
      solution: "إنشاء مكاتب خدمات حكومية متنوعة داخل المركز (ضرائب، مرور، جوازات)",
      icon: FileText,
      solutionIcon: CheckCircle,
    },
  ];

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1B4965] mb-4">
            الدائرة الانتخابية
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#333]/80">مركز دار السلام - محافظة سوهاج</p>
        </div>

        {/* عن الدائرة + إحصائيات */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-soft bg-white border border-[#D4AF37]/20">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-[#1B4965]" />
              <h2 className="text-3xl font-bold text-[#1B4965]">عن الدائرة</h2>
            </div>
            <p className="text-[#333] leading-relaxed mb-4 text-lg">
              تقع دائرة مركز دار السلام في محافظة سوهاج بصعيد مصر، وتتميز بطابعها الزراعي وتراثها العريق. يعتمد معظم سكان الدائرة على الزراعة كمصدر رئيسي للدخل، وخاصة زراعة قصب السكر والقمح والذرة.
            </p>
            <p className="text-[#333] leading-relaxed text-lg">
              تضم الدائرة العديد من القرى والنجوع التي تحتاج إلى تطوير شامل في البنية التحتية والخدمات الأساسية. نسعى من خلال برنامجنا الانتخابي إلى تحقيق نقلة نوعية في جميع المجالات لخدمة أهالي الدائرة.
            </p>
          </Card>

          <Card className="p-8 shadow-soft bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-[#1B4965]" />
              <h2 className="text-3xl font-bold text-[#1B4965]">إحصائيات الدائرة</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "18+", label: "قرى رئيسية" },
                { value: "172+", label: "نجوع وعزب" },
                { value: "70%", label: "نشاط زراعي" },
                { value: "100%", label: "التزام بالخدمة" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/70 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* القرى الرئيسية */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1B4965] mb-8 text-center">
            القرى الرئيسية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {villages.map((village, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-soft border border-[#D4AF37]/20 hover:shadow-lg transition-all"
              >
                <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#1B4965]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#1B4965]">{village}</h3>
              </Card>
            ))}
          </div>
        </section>

        {/* خريطة الدائرة */}
        <section className="mb-16">
          <Card className="p-8 shadow-soft border border-[#D4AF37]/20">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-[#1B4965]" />
              <h2 className="text-3xl font-bold text-[#1B4965]">خريطة الدائرة</h2>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden mb-6 border border-[#D4AF37]/20">
              <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328512.1335526477!2d32.24426724933714!3d26.285520508977104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1448cae2b5b9f3f1%3A0x8e034c7de4bdae48!2z2K_Yp9ixINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYs9mI2YfYp9is!5e1!3m2!1sar!2seg!4v1761768065035!5m2!1sar!2seg" width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"></iframe>
            </div>
          </Card>
        </section>

        {/* التحديات والحلول */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1B4965] mb-4">التحديات والحلول</h2>
            <p className="text-xl text-[#333]/80 max-w-3xl mx-auto">
              نواجه معاً التحديات بحلول عملية ومستدامة
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="p-8 shadow-soft hover:shadow-lg transition-all border border-[#D4AF37]/20"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <challenge.icon className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-[#1B4965] mb-2">{challenge.title}</h3>
                        <p className="text-[#333] leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#D4AF37]/10 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <challenge.solutionIcon className="h-6 w-6 text-[#1B4965] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-[#1B4965] mb-2">الحل المقترح</h4>
                        <p className="text-[#333] leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mt-16 bg-[#D4AF37]/10 text-[#333] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1B4965]">التزامنا تجاه الدائرة</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            نتعهد بالعمل المتواصل مع جميع الجهات المعنية لحل هذه التحديات وتحسين حياة كل مواطن في دار السلام. صوتكم أمانة في أعناقنا، ونعدكم بالعمل الجاد والشفافية التامة في تنفيذ برنامجنا الانتخابي.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Constituency;
