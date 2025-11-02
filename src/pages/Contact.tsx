import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("access_key", "43eda491-f515-4783-8727-db1d1290dc4c");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ تم الإرسال بنجاح",
          description: "شكراً لتواصلك معنا! سنرد عليك قريباً.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "حدث خطأ",
          description: "من فضلك حاول مرة أخرى لاحقاً.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "تعذر الإرسال",
        description: "تحقق من الاتصال بالإنترنت.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-[#FDFBF7] text-[#1B4965]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[#1B4965]">
            تواصل معنا
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#333]/80">
            نحن هنا للاستماع إليك والإجابة على استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-[#1B4965] mb-6">
              أرسل رسالتك
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">الاسم *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">رقم الهاتف *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01xxxxxxxxx"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">الرسالة *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  required
                  className="mt-2 min-h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-[#D4AF37] hover:opacity-90 text-[#1B4965] font-bold"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>جاري الإرسال...</span>
                  </div>
                ) : (
                  "إرسال الرسالة"
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-[#1B4965] mb-6">
                معلومات الاتصال
              </h2>

              <div className="space-y-6">
                <InfoItem
                  icon={<MapPin className="h-6 w-6 text-[#1B4965]" />}
                  title="العنوان"
                  text="مركز دار السلام، محافظة سوهاج، مصر"
                />
                <InfoItem
                  icon={<Phone className="h-6 w-6 text-[#1B4965]" />}
                  title="الهاتف"
                  text="01123456789"
                />
                <InfoItem
                  icon={<Mail className="h-6 w-6 text-[#1B4965]" />}
                  title="البريد الإلكتروني"
                  text="info@alaalsaman.com"
                />
                <InfoItem
                  icon={<MessageCircle className="h-6 w-6 text-[#1B4965]" />}
                  title="واتساب"
                  text="تواصل مباشر عبر واتساب"
                />
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-[#1B4965] mb-6">
                تابعنا على وسائل التواصل
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { Icon: Facebook, label: "فيسبوك" },
                  { Icon: Twitter, label: "تويتر" },
                  { Icon: Instagram, label: "إنستجرام" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="aspect-square bg-[#D4AF37] hover:opacity-90 rounded-lg flex flex-col items-center justify-center text-[#1B4965] transition-all group"
                    aria-label={label}
                  >
                    <Icon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">{label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-8 shadow-soft bg-[#1B4965] text-white">
              <h2 className="text-2xl font-bold mb-4">ساعات العمل</h2>
              <p className="text-white/90 leading-relaxed">
                المقر الانتخابي مفتوح يومياً من السبت إلى الخميس من الساعة 9
                صباحاً حتى 5 مساءً
              </p>
            </Card>
          </div>
        </div>

        {/* Google Map */}
        <Card className="mt-16 p-4 shadow-soft border-2 border-[#D4AF37] rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-[#1B4965] mb-4">
            موقع المقر الانتخابي على الخريطة
          </h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328512.1335526477!2d32.24426724933714!3d26.285520508977104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1448cae2b5b9f3f1%3A0x8e034c7de4bdae48!2z2K_Yp9ixINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYs9mI2YfYp9is!5e1!3m2!1sar!2seg!4v1761768065035!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"   
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
};

const InfoItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-[#333]/80">{text}</p>
    </div>
  </div>
);

export default Contact;
