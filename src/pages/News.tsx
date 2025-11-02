import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "2025-01-15",
      title: "إطلاق الحملة الانتخابية رسمياً",
      summary:
        "أعلن الأستاذ علاء السمان عن إطلاق حملته الانتخابية رسمياً لمقعد مجلس النواب عن دائرة دار السلام، في مؤتمر جماهيري حاشد شهد حضوراً كبيراً من أهالي الدائرة.",
      category: "أخبار الحملة",
    },
    {
      date: "2025-01-12",
      title: "جولة ميدانية شاملة في قرى الدائرة",
      summary:
        "قام المرشح بجولة ميدانية استمرت ثلاثة أيام شملت جميع قرى ونجوع الدائرة، للاستماع مباشرة لمشاكل المواطنين واحتياجاتهم.",
      category: "جولات ميدانية",
    },
    {
      date: "2025-01-10",
      title: "لقاء موسع مع شباب الدائرة",
      summary:
        "عقد لقاء تفاعلي مع شباب الدائرة لمناقشة التحديات التي تواجههم وسبل توفير فرص العمل والتدريب المناسب لهم.",
      category: "لقاءات",
    },
    {
      date: "2025-01-08",
      title: "زيارة المستشفى المركزي ومعاينة احتياجاته",
      summary:
        "قام المرشح بزيارة تفقدية للمستشفى المركزي بدار السلام للوقوف على الوضع الصحي الحالي ومعاينة احتياجات التطوير الضرورية.",
      category: "زيارات ميدانية",
    },
    {
      date: "2025-01-05",
      title: "اجتماع مع ممثلي الجمعيات الزراعية",
      summary:
        "عقد اجتماع موسع مع ممثلي الجمعيات الزراعية ومزارعي الدائرة لبحث مشاكل القطاع الزراعي والحلول المقترحة.",
      category: "لقاءات",
    },
    {
      date: "2025-01-03",
      title: "تدشين المقر الانتخابي الرئيسي",
      summary:
        "تم افتتاح المقر الانتخابي الرئيسي للحملة بحضور عدد كبير من المؤيدين والمتطوعين، مع الإعلان عن استقبال طلبات واقتراحات المواطنين.",
      category: "أخبار الحملة",
    },
    {
      date: "2025-01-01",
      title: "الإعلان الرسمي عن الترشح",
      summary:
        "أعلن الصحفي علاء السمان رسمياً عن ترشحه لمقعد مجلس النواب عن دائرة دار السلام برقم 1 ورمز الصقر.",
      category: "بيانات صحفية",
    },
  ];

  return (
    <div className="py-12 bg-[#FDFBF7] text-[#1B4965]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1B4965] mb-4">
            آخر الأخبار والبيانات
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#333]/80">
            تابع آخر أخبار الحملة الانتخابية
          </p>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="p-8 shadow-soft hover:shadow-lg transition-all border border-[#D4AF37]/20"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-2 text-[#1B4965]/80">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(item.date).toLocaleDateString("ar-EG")}</span>
                    </div>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#1B4965] mb-4">
                    {item.title}
                  </h2>

                  <p className="text-[#333] leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <Button variant="ghost" className="text-[#D4AF37] group">
                    اقرأ المزيد
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stay Updated Section */}
        <section className="mt-16 bg-[#D4AF37]/10 text-[#1B4965] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">ابق على اطلاع</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات أولاً بأول
          </p>
          <Button
            size="lg"
            className="bg-[#1B4965] hover:bg-[#1B4965]/90 text-[#D4AF37] font-bold"
          >
            تابعنا على فيسبوك
          </Button>
        </section>
      </div>
    </div>
  );
};

export default News;
