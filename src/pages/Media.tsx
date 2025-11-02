import { Card } from "@/components/ui/card";
import { Image, Video } from "lucide-react";

const Media = () => {
  const photos = [
    { title: "جولة ميدانية في القرى", description: "زيارة لقرى الدائرة والاستماع لمشاكل المواطنين" },
    { title: "لقاء مع الشباب", description: "مناقشة احتياجات الشباب وفرص العمل" },
    { title: "زيارة المستشفى المركزي", description: "معاينة الوضع الصحي ومتطلبات التطوير" },
    { title: "لقاء مع المزارعين", description: "مناقشة مشاكل القطاع الزراعي والحلول المقترحة" },
    { title: "زيارة المدارس", description: "متابعة الوضع التعليمي واحتياجات الطلاب" },
    { title: "مؤتمر جماهيري", description: "عرض البرنامج الانتخابي أمام الجماهير" },
  ];

  const videos = [
    { title: "كلمة المرشح للناخبين", description: "رسالة مباشرة من علاء السمان إلى أهالي دار السلام" },
    { title: "جولة في الدائرة الانتخابية", description: "تغطية شاملة للجولات الميدانية في القرى والنجوع" },
    { title: "البرنامج الانتخابي - الصحة والتعليم", description: "شرح مفصل لمحاور الصحة والتعليم في البرنامج" },
    { title: "لقاءات مع المواطنين", description: "حوارات مباشرة مع الأهالي حول احتياجاتهم" },
  ];

  return (
    <div className="py-12 bg-[#FDFBF7] text-[#1B4965]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[#1B4965]">الصور والفيديوهات</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#333]/80">متابعة أنشطة الحملة الانتخابية</p>
        </div>

        {/* Photos Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Image className="h-8 w-8 text-[#1B4965]" />
            <h2 className="text-3xl font-bold text-[#1B4965]">معرض الصور</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-strong transition-all group">
                <div className="aspect-video bg-[#D4AF37]/10 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="h-16 w-16 text-[#1B4965]/50 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B4965] mb-2">{photo.title}</h3>
                  <p className="text-[#333]/80">{photo.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-[#1B4965]" />
            <h2 className="text-3xl font-bold text-[#1B4965]">الفيديوهات</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-strong transition-all group">
                <div className="aspect-video bg-[#1B4965]/10 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-r-0 border-b-8 border-b-transparent border-l-12 border-l-[#1B4965] mr-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B4965] mb-2">{video.title}</h3>
                  <p className="text-[#333]/80">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="mt-16 bg-[#D4AF37]/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1B4965] mb-4">المزيد قريباً</h3>
          <p className="text-lg text-[#333]/80 max-w-2xl mx-auto">
            نعمل على توفير المزيد من الصور والفيديوهات من جولاتنا الميدانية ولقاءاتنا مع المواطنين. تابعونا على صفحاتنا الرسمية للحصول على آخر التحديثات.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Media;
