import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogPost1() {
    return (
        <main className="min-h-screen bg-timber-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-medium text-timber-anthracite mb-8">
                    2026 Hatay Kereste Fiyatları ve İnşaat Sektörü
                </h1>
                <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 shadow-xl">
                    <img src="/hero-bg-main.png" alt="Hatay İnşaatlık Kereste" className="w-full h-full object-cover" />
                </div>
                <div className="prose prose-lg max-w-none text-timber-anthracite/80 space-y-6">
                    <p className="text-xl font-serif italic">
                        Hatay'ın yeniden yapılanma sürecinde inşaatlık kereste fiyatları ve doğru malzeme seçimi hayati önem taşıyor.
                    </p>
                    <p>
                        2026 yılı itibarıyla Hatay ve çevresinde inşaat sektörü hız kazanmaya devam ederken, kereste fiyatları da arz-talep dengesine göre şekilleniyor. Özellikle çam ve ladin gibi ağaç türleri, dayanıklılıkları ve uygun maliyetleri nedeniyle Hatay'daki projelerde en çok tercih edilenler arasında.
                    </p>
                    <h2 className="text-2xl font-bold text-timber-anthracite">Hangi Ağaç Türü Daha Dayanıklı?</h2>
                    <p>
                        İnşaatlık kereste seçiminde bölgenin iklim şartları göz önünde bulundurulmalıdır. Hatay'ın nemli ve sıcak havasına karşı fırınlanmış ve silinmiş keresteler daha uzun ömürlü bir kullanım sunar. Zeynel İstanbullu Kereste olarak, projelerinize en uygun ve ekonomik çözümleri sunmak için 30 yıllık tecrübemizle yanınızdayız.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
