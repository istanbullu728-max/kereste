import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TopBar() {
    return (
        <div className="relative z-50 bg-timber-anthracite/95 text-timber-white/80 backdrop-blur-md text-xs font-sans tracking-wide border-b border-white/5">
            <div className="container mx-auto px-6 h-10 flex items-center justify-between">
                {/* Left Section: Contact Info */}
                <div className="flex items-center gap-6 hidden md:flex">
                    <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                        <Phone size={14} className="text-timber-beige" />
                        <span>+90 539 947 13 00</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                        <MapPin size={14} className="text-timber-beige" />
                        <span>Istanbul, Turkey</span>
                    </div>
                </div>

                {/* Right Section: Actions */}
                <div className="flex items-center gap-4 ml-auto">
                    {/* WhatsApp Button */}
                    <Link
                        href="https://wa.me/"
                        className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300"
                    >
                        <MessageCircle size={14} />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </Link>

                    <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>

                    {/* Get Quote Button - Text Only style for TopBar to keep it minimal */}
                    <Link
                        href="/iletisim"
                        className="flex items-center gap-2 font-medium text-timber-white hover:text-timber-beige transition-colors duration-300 group"
                    >
                        <span>Fiyat Teklifi Al</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
