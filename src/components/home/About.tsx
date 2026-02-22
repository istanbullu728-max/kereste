"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    "30 Yıllık Tecrübe",
    "Sürdürülebilir Ormancılık",
    "Yüksek Kalite Standartları",
    "Müşteri Odaklı Çözümler",
];

export function About() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-timber-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-timber-beige/5 skew-x-12 translate-x-1/2 hidden md:block" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
                                alt="Usta Marangoz"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[260px] sm:h-[340px] lg:h-auto object-cover"
                            />
                        </div>
                        {/* Secondary Image - only md+ */}
                        <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-10 w-1/2 sm:w-2/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-timber-white z-20 hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1582121332849-5f257a064fe7?q=80&w=600&auto=format&fit=crop"
                                alt="Kaliteli Kereste"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Dot pattern */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,_#D2B48C_1px,_transparent_1px)] bg-[length:10px_10px] opacity-30 hidden sm:block" />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 sm:space-y-8 mt-4 md:mt-0"
                    >
                        <div>
                            <h3 className="text-timber-highlight font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
                                Hakkımızda
                            </h3>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-timber-anthracite leading-tight">
                                Ahşabın Doğallığını{" "}
                                <span className="text-timber-anthracite/70">Yaşam Alanlarınıza Taşıyoruz.</span>
                            </h2>
                        </div>

                        <p className="text-timber-anthracite/70 text-base sm:text-lg leading-relaxed">
                            Zeynel İstanbullu Kereste olarak, doğanın bize sunduğu en değerli hediyeyi, ahşabı, ustalıkla işliyor ve yaşam alanlarınıza değer katacak formlara dönüştürüyoruz.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-timber-highlight w-5 h-5 flex-shrink-0" />
                                    <span className="text-timber-anthracite font-medium text-sm sm:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/hakkimizda"
                                className="inline-flex items-center gap-2 text-timber-anthracite font-bold border-b-2 border-timber-highlight pb-1 hover:text-timber-highlight transition-colors duration-300 text-sm sm:text-base"
                            >
                                Hikayemizi Oku <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
