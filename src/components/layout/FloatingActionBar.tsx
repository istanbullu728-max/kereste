"use client";

import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingActionBar() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 200); // Show after scrolling 200px
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
                >
                    <div className="flex gap-4 p-2 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-glass">

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/905399471300"
                            className="flex-1 group flex items-center justify-center gap-2 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                        >
                            <MessageCircle size={20} fill="currentColor" className="text-white/90" />
                            <span className="font-sans font-bold text-sm tracking-wide">WhatsApp</span>
                        </a>

                        {/* Call Button */}
                        <a
                            href="tel:+905399471300"
                            className="flex-1 group flex items-center justify-center gap-2 bg-timber-anthracite text-white p-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                        >
                            <Phone size={20} className="text-white/90" />
                            <span className="font-sans font-bold text-sm tracking-wide">Ara</span>
                        </a>

                    </div>
                    {/* Bottom safety spacer for iOS home indicator is handled by body padding in globals.css */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
