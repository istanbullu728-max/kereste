import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import fs from "fs";
import path from "path";
import { MapPin, MessageCircle } from "lucide-react";

// Read data
const dataPath = path.join(process.cwd(), "seo_dataset.json");
const seoData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

export async function generateStaticParams() {
    return seoData.map((item: any) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const item = seoData.find((d: any) => d.slug === params.slug);
    if (!item) return {};

    const titlePrefixMatch = item.h1.match(/^(.*?) Satışı/);
    const titlePrefix = titlePrefixMatch ? titlePrefixMatch[1] : item.keyword_focus;

    return {
        title: `${titlePrefix} | Zeynel İstanbullu Kereste`,
        description: item.local_context,
    };
}

export default function SEOPage({ params }: { params: { slug: string } }) {
    const item = seoData.find((d: any) => d.slug === params.slug);
    
    if (!item) {
        notFound();
    }

    const titlePrefixMatch = item.h1.match(/^(.*?) Satışı/);
    const titlePrefix = titlePrefixMatch ? titlePrefixMatch[1] : item.keyword_focus;
    
    const firstSpaceIdx = titlePrefix.indexOf(' ');
    const ilce = titlePrefix.substring(0, firstSpaceIdx);
    const urun = titlePrefix.substring(firstSpaceIdx + 1);
    
    const whatsappMessage = encodeURIComponent(`${ilce} bölgesi için ${urun} fiyatı almak istiyorum.`);
    const whatsappLink = `https://wa.me/905399471300?text=${whatsappMessage}`;

    return (
        <main className="min-h-screen bg-timber-white selection:bg-timber-highlight selection:text-white">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-timber-anthracite text-timber-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    {/* Using a relative path that Next.js understands from public folder */}
                    <img src="/hero-bg-main.png" alt="Arka Plan" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-timber-anthracite to-transparent opacity-80" />
                
                <div className="container mx-auto px-5 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-6 text-white text-balance leading-tight">
                        {item.h1}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-sans text-balance">
                        {item.local_context}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-5 max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl border border-gray-100/50 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-timber-highlight/5 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-timber-earth/5 rounded-full blur-3xl -mx-10 -my-10 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-timber-anthracite mb-6">
                                Fiyat Teklifi ve Sipariş
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg md:text-xl text-balance">
                                {urun} ihtiyaçlarınız için {ilce} bölgesine özel en uygun fiyat teklifini sunmak üzere uzman ekibimiz bir mesaj uzağınızda.
                            </p>
                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-1 group"
                            >
                                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span>WhatsApp'tan Fiyat Al</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-16 md:py-24 bg-timber-sand">
                <div className="container mx-auto px-5 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-timber-anthracite mb-12 relative inline-block">
                        Hatay'daki Diğer Keresteciler Arasında Neden Biz?
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-timber-highlight rounded-full"></span>
                    </h2>
                    
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start gap-6 text-left hover:shadow-md transition-shadow">
                        <div className="bg-timber-highlight/10 p-4 rounded-full flex-shrink-0">
                            <MapPin className="w-8 h-8 text-timber-highlight" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{ilce} Bölgesine Özel Hizmet</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                {item.local_context}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Yılların verdiği tecrübe ve geniş ürün yelpazemizle, Hatay'ın her köşesindeki projelere değer katıyoruz. Kaliteli malzeme, uygun fiyat ve zamanında teslimat prensibiyle daima yanınızdayız.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
