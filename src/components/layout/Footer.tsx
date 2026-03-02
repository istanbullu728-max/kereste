import Link from "next/link";
import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
            <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-14 md:py-16">
                {/* Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

                    {/* Column 1: Logo & Motto — full width on mobile */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6">
                        <Link href="/" className="inline-block">
                            <Logo className="h-14 sm:h-16 w-auto" light={false} />
                        </Link>
                    </div>

                    {/* Column 2: Kurumsal */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6">
                        <h3 className="font-display font-semibold text-gray-900 text-base sm:text-lg">Kurumsal</h3>
                        <nav className="flex flex-col space-y-2 sm:space-y-3">
                            <Link href="/hakkimizda" className="text-xs sm:text-sm hover:text-black hover:translate-x-1 transition-all duration-300">
                                Hakkımızda
                            </Link>
                            {["Kariyer", "Sertifikalarımız", "Blog"].map((item) => (
                                <Link key={item} href="#" className="text-xs sm:text-sm hover:text-black hover:translate-x-1 transition-all duration-300">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Çalışmalarımız */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6">
                        <h3 className="font-display font-semibold text-gray-900 text-base sm:text-lg">Çalışmalarımız</h3>
                        <nav className="flex flex-col space-y-2 sm:space-y-3">
                            {["Kereste Grupları", "Plywood", "Lambri", "Özel Kesim"].map((item) => (
                                <Link key={item} href="/products" className="text-xs sm:text-sm hover:text-black hover:translate-x-1 transition-all duration-300">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 4: İletişim — full width on mobile */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4 sm:space-y-6">
                        <h3 className="font-display font-semibold text-gray-900 text-base sm:text-lg">İletişim</h3>
                        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm w-full">
                            <a href="mailto:mehmetist048@gmail.com" className="flex items-center gap-3 hover:text-black transition-colors group">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-timber-brown group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="truncate">mehmetist048@gmail.com</span>
                            </a>
                            <a href="tel:+905399471300" className="flex items-center gap-3 hover:text-black transition-colors group">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-timber-brown group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>+90 539 947 13 00</span>
                            </a>
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-timber-brown mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">Defne, Hatay</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-full hover:bg-timber-brown hover:text-white hover:border-timber-brown transition-all duration-300 shadow-sm">
                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm font-medium hover:bg-[#6D482D] transition-all duration-300 shadow-lg"
                        >
                            <span>Fiyat Teklifi Al</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
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
