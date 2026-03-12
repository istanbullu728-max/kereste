"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
    "Ahşap Lambri",
    "Kütük Lambri",
    "Ahşap Parke",
    "Plywood",
    "Kapı Sereni",
    "Şıngıl",
    "Kalıplık Kereste",
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % products.length);
        }, 2800);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[85vh] sm:min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden pt-28 sm:pt-0">

            {/* ── Background Image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-cabin.webp"
                    alt="Hatay kereste ürünleri ve inşaatlık kereste üretimi - Zeynel İstanbullu"
                    fill
                    className="object-cover object-center lg:object-[center_30%]"
                    priority
                    loading="eager"
                    sizes="100vw"
                    style={{ filter: "brightness(0.9) contrast(1.1)" }}
                />
                {/* ── %35 Karartma Overlay — metin okunabilirliği için ── */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />
            </div>

            {/* ── Grain texture overlay ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* ── Gold top accent ── */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

            {/* ── TEXT BLOCK ── */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 w-full max-w-4xl mx-auto pt-6 sm:pt-24 pb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/50 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.15em] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-center leading-relaxed" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 16px rgba(0,0,0,0.2)" }}>
                        <span>Hatay Defne</span>
                    </span>
                </motion.div>

                {/* Brand name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-white font-outfit font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[22px] sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 pt-4 sm:pt-0"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                >
                    Hatay'ın Güvenilir Kereste Tedarikçisi <span className="sr-only">Zeynel İstanbullu Kereste</span>
                </motion.h1>

                {/* SEO Text */}
                <div className="sr-only">
                    Hatay Kereste, hataykereste, Antakya kereste imalatı ve en uygun kereste fiyatları için Zeynel İstanbullu.
                </div>

                {/* Divider */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-4 mb-3 sm:mb-0">
                    <span className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-transparent to-amber-400/80" />
                    <span className="text-amber-400 text-xl sm:text-xl font-bold uppercase tracking-widest text-[10px]">Hatay Kereste Fabrikası</span>
                    <span className="h-[2px] w-16 sm:w-20 bg-gradient-to-l from-transparent to-amber-400/80" />
                </motion.div>

                {/* Animated product name */}
                <motion.div
                    variants={itemVariants}
                    className="relative h-[72px] sm:h-[68px] md:h-[82px] lg:h-[95px] w-full flex justify-center items-center overflow-hidden mb-5 sm:mb-4"
                >
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={products[index]}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute font-serif font-black italic text-amber-400 text-[48px] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none py-1 drop-shadow-2xl w-full text-center px-4"
                            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
                        >
                            {products[index]}
                        </motion.h2>
                    </AnimatePresence>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/95 text-[16px] sm:text-base md:text-lg font-normal tracking-wide mb-9 sm:mb-10 max-w-sm sm:max-w-lg"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)" }}
                >
                    Hatay ve çevresinde 30 yıllık tecrübeyle kaliteli ahşap ürünler,{" "}
                    <span className="hidden sm:inline"><br /></span>
                    uygun fiyatlı inşaatlık kereste ve uzman hizmet.
                </motion.p>
                {/* CTA */}
                <motion.div variants={itemVariants} className="mb-4 sm:mb-10">
                    <Link
                        href="https://wa.me/905399471300?text=Merhaba+fiyat+teklifi+almak+istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center px-7 py-3.5 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-stone-900 text-[15px] sm:text-sm font-extrabold tracking-widest uppercase shadow-xl transition-all duration-300 active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #C5A059 0%, #B8860B 50%, #A0722A 100%)",
                            boxShadow: "0 4px 20px rgba(180,130,30,0.4), 0 1px 0 rgba(255,255,255,0.2) inset"
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #D4AF6A 0%, #C5A059 50%, #B8860B 100%)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #C5A059 0%, #B8860B 50%, #A0722A 100%)")}
                    >
                        <span>Fiyat Teklifi Al</span>
                        <ArrowRight className="w-[19px] h-[19px] ml-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.8} />
                    </Link>
                </motion.div>

            </motion.div>



        </section>
    );
}
