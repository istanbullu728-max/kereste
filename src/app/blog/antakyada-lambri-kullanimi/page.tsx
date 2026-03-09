import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogPost2() {
    return (
        <main className="min-h-screen bg-timber-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-medium text-timber-anthracite mb-8">
                    Antakya'da Ev Dekorasyonunda Lambri Kullanımı
                </h1>
                <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 shadow-xl">
                    <img src="/ahsap-lambri.jpg" alt="Antakya Ahşap Lambri Dekorasyonu" className="w-full h-full object-cover" />
                </div>
                <div className="prose prose-lg max-w-none text-timber-anthracite/80 space-y-6">
                    <p className="text-xl font-serif italic">
                        Doğallığı evinize taşıyan ahşap lambri paneller, Antakya'nın modern ve geleneksel evlerinde yeniden popülerleşiyor.
                    </p>
                    <p>
                        Ahşap lambri kullanımı, sadece estetik bir görünüm sunmakla kalmaz, aynı zamanda doğal bir ısı ve ses yalıtımı da sağlar. Antakya'nın özgün mimarisiyle harmanlanan lambri detayları, yaşam alanlarınıza sıcaklık ve prestij katar.
                    </p>
                    <h2 className="text-2xl font-bold text-timber-anthracite">Hatay İklimine Uygunluk</h2>
                    <p>
                        Ahşap, nefes alan bir malzeme olduğu için Hatay gibi sıcak bölgelerde ortam nemini dengeleme özelliğine sahiptir. Duvar ve tavan kaplamalarında kullanılan kaliteli lambri ürünlerimiz, uzun yıllar formunu koruyarak evinizin değerini artırır.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
