import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import candidateImage from "@/assets/candidate.jpeg";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "التعليم والمؤهلات",
      description: "خبرة واسعة في العمل الصحفي والإعلامي",
    },
    {
      icon: Briefcase,
      title: "المسيرة المهنية",
      description: "صحفي متميز بخبرة طويلة في خدمة المجتمع",
    },
    {
      icon: Heart,
      title: "العمل المجتمعي",
      description: "مشاركة فعالة في خدمة أهالي دار السلام",
    },
    {
      icon: Award,
      title: "الإنجازات",
      description: "سجل حافل في المبادرات التنموية والاجتماعية",
    },
  ];

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1B4965] mb-4">من هو المرشح</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Main Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full"></div>
              <img
                src={candidateImage}
                alt="علاء السمان"
                className="relative rounded-2xl shadow-lg w-full max-w-md border-4 border-[#D4AF37]/20"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-[#1B4965] mb-4">
              الصحفي/ علاء السمان
            </h2>
            <div className="text-2xl font-bold text-[#D4AF37] mb-6">
              رقم 1 - رمز الصقر
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-[#333]">
              <p>
                مرشح مجلس النواب المصري عن دائرة مركز دار السلام، يتمتع بخبرة
                واسعة في العمل الصحفي والإعلامي، مما منحه فهماً عميقاً لقضايا
                المجتمع واحتياجات المواطنين.
              </p>

              <p>
                يؤمن بأن التغيير الحقيقي يبدأ من الاستماع لصوت المواطن البسيط
                والعمل على تحسين واقعه المعيشي من خلال برامج تنموية شاملة تركز على
                الصحة والتعليم والبنية التحتية.
              </p>

              <Card className="bg-[#D4AF37]/10 p-6 text-[#1B4965] border border-[#D4AF37]/30 shadow-md">
                <p className="text-xl font-semibold italic text-center">
                  "معاً نبني مستقبل أفضل لدار السلام، حيث يحصل كل مواطن على حقوقه
                  الأساسية في الصحة والتعليم والحياة الكريمة"
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-[#1B4965] mb-12">
            المسيرة والإنجازات
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-soft hover:shadow-lg transition-all bg-white border border-[#D4AF37]/20"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#1B4965]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1B4965]">
                  {item.title}
                </h3>
                <p className="text-[#5C6B73]">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-[#1B4965]/5 rounded-2xl p-8 md:p-12 shadow-inner">
          <h2 className="text-3xl font-bold text-center text-[#1B4965] mb-8">
            رؤية المرشح
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-[#333]">
            <p>
              نسعى إلى تحويل دار السلام إلى نموذج للتنمية المستدامة، حيث يتمتع
              كل مواطن بخدمات صحية وتعليمية متميزة، وبنية تحتية حديثة، وفرص عمل
              حقيقية تضمن حياة كريمة.
            </p>
            <p>
              نؤمن بأهمية المشاركة المجتمعية في صنع القرار، ونلتزم بالشفافية
              والمحاسبة في جميع مراحل العمل، مع التركيز على احتياجات الفئات
              الأكثر احتياجاً في مجتمعنا.
            </p>
            <p>
              التنمية الحقيقية لا تكتمل إلا بتمكين الشباب والمرأة وذوي الهمم،
              وضمان حصولهم على كامل حقوقهم ومشاركتهم الفعالة في بناء مستقبل
              مشرق لدار السلام.
            </p>
          </div>
        </section>

        {/* Community Service */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-[#1B4965] mb-12">
            خدمة المجتمع
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "المبادرات الصحية",
                desc: "المشاركة في حملات توعية صحية ودعم المستشفيات المحلية بالمعدات والأدوية اللازمة.",
              },
              {
                title: "دعم التعليم",
                desc: "تنظيم برامج تدريبية للطلاب ودعم المدارس بالاحتياجات التعليمية الأساسية.",
              },
              {
                title: "التنمية الاقتصادية",
                desc: "دعم المشروعات الصغيرة ومساعدة الشباب في الحصول على فرص عمل مناسبة.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 shadow-soft hover:shadow-lg border border-[#D4AF37]/20 transition-all bg-white"
              >
                <h3 className="text-xl font-bold text-[#1B4965] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5C6B73]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
