import Link from "next/link";
import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Zeynel İstanbullu Kereste - Hatay Kereste",
        "image": "https://hataykereste.com/hero-bg-main.png",
        "@id": "https://hataykereste.com",
        "url": "https://hataykereste.com",
        "telephone": "+905399471300",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Antakya Samandağ Yolu, Güneş Koleji Karşısı",
            "addressLocality": "Defne",
            "addressRegion": "Hatay",
            "postalCode": "31160",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.1740957,
            "longitude": 36.113866
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-14 md:py-16">
                {/* Grid: 1 col mobile, 3 col desktop for balance */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">

                    {/* Column 1: Logo & Motto */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <Logo className="h-16 sm:h-20 w-auto" light={false} />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-500">
                            Hatay kereste ve hataykereste arayışlarınızda kalite ve güvenin adresi Zeynel İstanbullu Kereste, tüm ahşap yapı projelerinizde yanınızda.
                        </p>
                    </div>

                    {/* Column 2: Kurumsal */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <h3 className="font-display font-bold text-gray-900 text-lg uppercase tracking-wider">Hızlı Linkler</h3>
                        <nav className="flex flex-col items-center md:items-start space-y-3">
                            {[
                                { name: "Anasayfa", href: "/" },
                                { name: "Ürünlerimiz", href: "/urunler" },
                                { name: "Blog", href: "/blog" },
                                { name: "Hakkımızda", href: "/hakkimizda" },
                                { name: "İletişim", href: "/iletisim" }
                            ].map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm hover:text-timber-brown transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: İletişim */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <h3 className="font-display font-bold text-gray-900 text-lg uppercase tracking-wider">İletişim</h3>
                        <div className="flex flex-col items-center md:items-start space-y-4 text-sm w-full">
                            <a href="mailto:mehmetist048@gmail.com" className="flex items-center gap-3 hover:text-timber-brown transition-colors group">
                                <Mail className="w-5 h-5 text-timber-brown group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="truncate">mehmetist048@gmail.com</span>
                            </a>
                            <a href="tel:+905399471300" className="flex items-center gap-3 hover:text-timber-brown transition-colors group">
                                <Phone className="w-5 h-5 text-timber-brown group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>+90 539 947 13 00</span>
                            </a>
                            <div className="flex items-start gap-3 group text-center md:text-left">
                                <MapPin className="w-5 h-5 text-timber-brown mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="leading-relaxed">
                                    Antakya samandağ istikameti, <br />
                                    Dağlı marketini geçtikten sonra <br />
                                    (Samandağa giderken) <br />
                                    Güneş koleji karşısındayız
                                </span>
                            </div>
                        </div>

                        {/* Socials & CTA */}
                        <div className="flex flex-col items-center md:items-start gap-6 w-full">
                            <div className="flex items-center gap-4">
                                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                    <Link key={i} href="#" className="p-3 bg-white border border-gray-200 rounded-full hover:bg-timber-brown hover:text-white hover:border-timber-brown transition-all duration-300 shadow-sm">
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="https://wa.me/905399471300?text=Merhaba+fiyat+teklifi+almak+istiyorum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-[#6D482D] transition-all duration-300 shadow-lg hover:shadow-timber-brown/20 uppercase tracking-wide"
                            >
                                <span>Fiyat Teklifi Al</span>
                                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 bg-gray-100/50">
                <div className="container mx-auto px-5 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-medium text-gray-500">
                    <p className="text-center sm:text-left">© 2026 Zeynel İstanbullu Kereste. Tüm Hakları Saklıdır.</p>
                    <div className="flex gap-5 sm:gap-8">
                        <Link href="#" className="hover:text-black transition-colors">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-black transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
