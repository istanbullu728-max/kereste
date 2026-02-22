"use client";

import { motion } from "framer-motion";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Factory, TreePine, Users, Award } from "lucide-react";

const stats = [
    { label: "Yıllık Tecrübe", value: "30+", icon: Award },
    { label: "Tamamlanan Proje", value: "1000+", icon: Factory },
    { label: "Mutlu Müşteri", value: "500+", icon: Users },
    { label: "Sürdürülebilir Orman", value: "%100", icon: TreePine },
];


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-timber-white selection:bg-timber-highlight selection:text-white">

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-timber-beige/10 skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-medium text-timber-anthracite leading-tight">
                            Ahşabın Hikayesi, <br />
                            <span className="text-timber-highlight">Bizim Hikayemiz.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-timber-anthracite/70 leading-relaxed font-light">
                            1994'ten beri, doğanın en asil malzemesini sanatla ve ustalıkla buluşturuyoruz.
                            Her ağacın bir karakteri olduğuna inanıyor, yaşam alanlarınıza ruh katıyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image & Story Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1622396636133-7a6b47c09363?q=80&w=2000&auto=format&fit=crop"
                                    alt="Ahşap Atölyesi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-timber-highlight/30 -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-timber-highlight font-sans text-sm font-bold tracking-widest uppercase mb-4">
                                    Köklerimiz
                                </h3>
                                <h2 className="text-3xl md:text-4xl font-display font-medium text-timber-anthracite mb-6">
                                    Gelenekten Geleceğe Uzanan Yolculuk
                                </h2>
                                <div className="space-y-4 text-timber-anthracite/80 text-lg leading-relaxed">
                                    <p>
                                        Zeynel İstanbullu Kereste olarak yolculuğumuz, ahşaba duyduğumuz tutkuyla başladı.
                                        Küçük bir atölyede başlayan serüvenimiz, bugün modern tesislerimizde, uluslararası
                                        kalite standartlarında üretim yapan bir marka olarak devam ediyor.
                                    </p>
                                    <p>
                                        Sadece kereste ticareti yapmıyor; mimarlar, tasarımcılar ve yapı sektörü profesyonelleri
                                        için güvenilir bir çözüm ortağı oluyoruz. İnşaatlık keresteden dekoratif panellere,
                                        zemin kaplamalarından özel tasarım ürünlere kadar geniş bir yelpazede hizmet sunuyoruz.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-timber-anthracite text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center space-y-4"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-2 text-timber-highlight">
                                    <stat.icon size={32} />
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                                <div className="text-white/60 text-sm tracking-widest uppercase">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



        </main>
    );
}
