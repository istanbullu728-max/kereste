"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyContactButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const buttons = [
        {
            icon: MessageCircle,
            label: "WhatsApp'tan Ulaş",
            href: "https://wa.me/905399471300",
            color: "bg-[#25D366]",
            hoverColor: "hover:bg-[#128C7E]",
            ariaLabel: "WhatsApp ile iletişime geç"
        },
        {
            icon: Phone,
            label: "Bizi Hemen Ara",
            href: "tel:+905399471300",
            color: "bg-[#8B5E3C]",
            hoverColor: "hover:bg-[#6D482D]",
            ariaLabel: "Telefon ile ara"
        }
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4 items-end pointer-events-none">
                    {buttons.map((btn, index) => (
                        <motion.a
                            key={index}
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 80, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 28,
                                delay: 0.15 * index
                            }}
                            whileTap={{ scale: 0.93 }}
                            href={btn.href}
                            target={btn.href.startsWith("http") ? "_blank" : undefined}
                            rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={cn(
                                "pointer-events-auto",
                                "group flex items-center justify-center rounded-full shadow-lg transition-colors duration-200",
                                "text-white border border-white/10",
                                /* Mobil: sadece ikon, sm+: etiketli */
                                "w-12 h-12 sm:w-auto sm:h-auto sm:pl-4 sm:pr-6 sm:py-3.5 sm:gap-3",
                                btn.color,
                                btn.hoverColor,
                            )}
                            aria-label={btn.ariaLabel}
                        >
                            <btn.icon size={21} strokeWidth={2.2} />
                            <span className="hidden sm:block font-display font-bold text-base tracking-wide whitespace-nowrap leading-none">
                                {btn.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            )}
        </AnimatePresence>
    );
}
