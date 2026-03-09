import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { products } from "@/data/products";

export const metadata: Metadata = {
    title: "Ürünlerimiz",
    description: "Ahşap lambri, kütük lambri, plywood, kapı sereni, şıngıl ve inşaatlık kereste çeşitlerimiz. Hatay'da en uygun fiyatlı ve kaliteli kereste ürünleri Zeynel İstanbullu'da.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-timber-white">
            <Header />
            <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-display font-medium text-timber-anthracite mb-6">Ürün Kataloğumuz</h1>
                    <p className="text-timber-anthracite/60 text-lg">
                        Geniş ürün yelpazemizle inşaat ve dekorasyon projeleriniz için en kaliteli ahşap çözümlerini sunuyoruz. Hatay Antakya'daki tesisimizde özenle hazırlanan ürünlerimizi inceleyin.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {products.map((item) => (
                        <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-timber-anthracite/5">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={`${item.title} - Hatay Zeynel İstanbullu Kereste İmalatı`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-display font-bold text-timber-anthracite mb-3 group-hover:text-timber-highlight transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-timber-anthracite/70 leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-timber-highlight font-bold text-sm uppercase tracking-widest gap-2">
                                    <span>Bilgi Alın</span>
                                    <div className="h-[2px] w-8 bg-timber-highlight"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-timber-anthracite rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src="/hero-bg-forest.jpg" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Özel Ölçü Siparişleriniz mi Var?</h2>
                        <p className="text-white/80 mb-10 text-lg">
                            İnşaatlık kereste ve diğer ürünlerimizde dilediğiniz ölçüde kesim yapabilmekteyiz. Hatay sınırları içerisinde hızlı teslimat sağlıyoruz.
                        </p>
                        <a
                            href="tel:+905399471300"
                            className="inline-flex items-center justify-center px-10 py-4 bg-amber-400 text-timber-anthracite rounded-full font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors"
                        >
                            Hemen Teklif Alın
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
