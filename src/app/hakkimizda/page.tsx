import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Zeynel İstanbullu Hatay Kereste",
    description: "Zeynel İstanbullu Kereste; Hatay'da 30 yılı aşkın tecrübesiyle kaliteli ahşap ve inşaatlık kereste çözümleri sunan en köklü fabrikadır. Tarihçemizi ve vizyonumuzu inceleyin.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-timber-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-medium text-timber-anthracite mb-8">Hakkımızda</h1>
                    <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
                        <img
                            src="/hero-bg-forest.jpg"
                            alt="Hatay Kereste Fabrikası Üretim Tesisimiz"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="prose prose-lg max-w-none text-timber-anthracite/80 space-y-6">
                        <p className="font-serif italic text-2xl text-timber-anthracite leading-relaxed">
                            "Zeynel İstanbullu Kereste, 30 yılı aşkın tecrübesiyle Hatay'ın en köklü ve güvenilir kereste üretim merkezlerinden biridir."
                        </p>
                        <p>
                            Güneş Koleji karşısında, Antakya-Samandağ yolu üzerinde yer alan fabrikamızda, inşaatlık kereste, silinmiş kereste, ahşap lambri ve kütük lambri gibi pek çok alanda yüksek kaliteli üretim yapmaktayız. Hatay, Antakya, İskenderun ve tüm çevre ilçelere hizmet veriyoruz.
                        </p>
                        <p>
                            Müşteri memnuniyetini ve kaliteyi her zaman ön planda tutan firmamız, gelişen teknolojiyle birlikte üretim kapasitesini her geçen gün artırmaktadır. Modern kesim teknikleri ve uzman kadromuzla projeleriniz için en dayanıklı ahşap çözümlerini sunuyoruz.
                        </p>

                        <h2 className="text-3xl font-display font-medium text-timber-anthracite pt-8">Neden Biz?</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>30 Yıllık Tecrübe:</strong> Sektördeki derin bilgi birikimimizle projelerinizi destekliyoruz.</li>
                            <li><strong>Yerel Güç:</strong> Hatay'ın yerel üreticisi olarak bölgenin iklimine ve ihtiyaçlarına en uygun ürünleri sunuyoruz.</li>
                            <li><strong>Geniş Ürün Yelpazesi:</strong> Lambri, plywood, kapı sereni, şıngıl ve daha fazlası tek adreste.</li>
                            <li><strong>Uygun Fiyat:</strong> Üreticiden doğrudan satış avantajıyla en rekabetçi fiyatları sağlıyoruz.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
