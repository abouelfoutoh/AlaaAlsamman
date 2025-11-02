import { Card } from "@/components/ui/card";
import {
  Heart,
  GraduationCap,
  Building2,
  Briefcase,
  Users,
  Wheat,
  Lightbulb,
  TreePine,
  Accessibility,
  Gavel,
} from "lucide-react";

const Program = () => {
  const programs = [
    {
      icon: Heart,
      title: "الصحة",
      color: "bg-[#D4AF37]/10", // نفس لون الصفحة الأصلية للكروت
      points: [
        "استكمال تطوير المستشفى الحكومي بدار السلام وتزويده بأحدث الأجهزة الطبية",
        "تحسين الخدمات الصحية في العيادات القروية",
        "معالجة النقص في أعداد الأطباء بالتعاون مع الجهات المختصة",
        "إنشاء خمسة مراكز صحية متكاملة لتغطية المراكز القروية",
      ],
    },
    {
      icon: GraduationCap,
      title: "التعليم",
      color: "bg-[#D4AF37]/10",
      points: [
        "بناء مدارس جديدة لتقليل كثافة الفصول",
        "إنشاء مؤسسات تعليمية متخصصة (مدارس فنية ومعاهد عليا)",
        "تطوير الفكر التعليمي من خلال الندوات والمؤتمرات التخصصية",
        "تحسين أوضاع المعلمين مادياً ومعنوياً",
        "تمكين المرأة كشريك فاعل في تطوير التعليم",
      ],
    },
    {
      icon: Building2,
      title: "البنية التحتية",
      color: "bg-[#D4AF37]/10",
      points: [
        "ربط الدائرة بخط سكة حديد لتسهيل حركة المواطنين والبضائع",
        "استكمال شبكات الصرف الصحي والغاز الطبيعي",
        "تحسين وصيانة الطرق الرئيسية والفرعية",
        "تحديث شبكة الكهرباء وتوفير محولات إضافية",
        "توفير المرافق للمناطق المخصصة للمقابر",
        "تحسين خدمات الإنترنت والاتصالات",
      ],
    },
    {
      icon: Lightbulb,
      title: "الحيز العمراني",
      color: "bg-[#D4AF37]/10",
      points: [
        "تحديث الحيز العمراني بما يحقق التوازن بين التنمية والظروف المعيشية",
        "تيسير إجراءات تقنين الأوضاع وفق القوانين",
        "توسيع الحيز العمراني لتوفير فرص سكن للشباب",
        "مراعاة البعد الاجتماعي والاقتصادي في التخطيط",
      ],
    },
    {
      icon: Briefcase,
      title: "البطالة وفرص العمل",
      color: "bg-[#D4AF37]/10",
      points: [
        "إدماج دار السلام في خطط التنمية الحكومية",
        "تأسيس شركة مساهمة عامة لتنفيذ المشروعات التنموية",
        "تسهيل حصول الشباب على تمويل للمشروعات الصغيرة",
        "ضمان حق ذوي الهمم في فرص العمل",
      ],
    },
    {
      icon: Users,
      title: "الشباب والخدمات العامة",
      color: "bg-[#D4AF37]/10",
      points: [
        "تمكين الشباب سياسياً واقتصادياً واجتماعياً",
        "تأهيل طلبة الجامعات وتخريج جيل واع ومؤهل",
        "إنشاء مكاتب خدمات حكومية متنوعة داخل المركز",
        "تخصيص مكتب دائم لاستقبال طلبات المواطنين",
        "إنشاء مراكز للشباب مزودة بكافة الإمكانيات",
      ],
    },
    {
      icon: Wheat,
      title: "الزراعة",
      color: "bg-[#D4AF37]/10",
      points: [
        "تطوير القطاع الزراعي وتوفير أسمدة وبذور بأسعار مناسبة",
        "التنوع الزراعي وتنشيط الجانب التصديري",
        "مناقشة إسقاط الديون المتراكمة على المزارعين",
        "استثمار الأراضي الصحراوية لإنشاء منطقة صناعية",
        "حماية أراضي الظهير الصحراوي وتقنين أوضاع المزارعين",
        "توصيل المرافق للأراضي المستصلحة",
        "إعادة تفعيل دور الجمعيات الزراعية",
      ],
    },
    {
      icon: TreePine,
      title: "البيئة والاستدامة",
      color: "bg-[#D4AF37]/10",
      points: [
        "تطوير نظام الري الحديث لترشيد استهلاك المياه",
        "دعم المشاريع الصديقة للبيئة",
        "حماية الأراضي الزراعية من التعديات",
        "تشجيع الزراعات المستدامة",
      ],
    },
    {
      icon: Gavel,
      title: "التشريع",
      color: "bg-[#D4AF37]/10",
      points: [
        "إصدار تشريعات تعزز العدالة الاجتماعية والاقتصادية وتحمي حقوق الفئات الفقيرة والمهمشة وأصحاب المعاشات.",
        "سن قوانين تدعم تنمية محافظات الصعيد وتحقق توزيعًا عادلًا للثروات بين جميع المناطق.",
      ],
    },
    {
      icon: Accessibility,
      title: "ذوي الهمم",
      color: "bg-[#D4AF37]/10",
      points: [
        "دمج ذوي الهمم في الخطط التنموية المحلية لضمان مشاركتهم الفعّالة.",
        "تضمين احتياجاتهم في مراحل التخطيط والتنفيذ للمشروعات.",
        "توفير برامج تدريب وتأهيل لتمكينهم من الاندماج في سوق العمل.",
        "إشراك ذوي الهمم في آليات اتخاذ القرار على المستوى المحلي لتعزيز التمثيل المجتمعي.",
        "إنشاء مراكز تأهيل وتدريب مهني متخصصة لتطوير مهاراتهم في بيئة ملائمة.",
      ],
    },
  ];

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1B4965] mb-4">البرنامج الانتخابي</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#333]/80 max-w-3xl mx-auto">
يسرّني أن أقدم لكم الخطوط العريضة لبرنامجي الانتخابي
الذي يحمل رؤية واقعية وحلولاً موضوعية وطموحة لمعالجة
التحديات التي تواجه منطقتنا في مجالات متعددة.
أتطلع إلى إحداث تغيير إيجابي ملموس يخدم مصلحة بلدنا
العزيز وأبنائه الكرام، وآمل وكلّي ثقة أن أحظى بدعمكم
وثقتكم.          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-8 shadow-soft hover:shadow-lg transition-all duration-300 group animate-slide-up bg-white border border-[#D4AF37]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`${program.color} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <program.icon className="h-8 w-8 text-[#1B4965]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1B4965]">{program.title}</h2>
              </div>

              <ul className="space-y-4">
                {program.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#333]/90 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <section className="mt-16 bg-[#D4AF37]/10 text-[#333] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1B4965]">التزامنا</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg leading-relaxed">
            <p>
              بناء على ما سبق فإنني أتعهد أن أكون داعما لكل ما هو نافع ومفيد لأهالي
دار السلام ومدافعاً عن مصالحهم وأتعهد أمام الله وأمامكم بالالتزام بالأمانة
والإستقامة فى كل ما يخص حاضر ومستقبل مركز دار السلام وأبنائه الكرام .. والله
الموفق وهو يهدي سبل الخير والرشاد.
            </p>
            <p className="font-bold text-[#1B4965] text-xl">
              معاً نبني مستقبل أفضل لدار السلام
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Program;
