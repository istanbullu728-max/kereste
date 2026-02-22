"use client";

import { motion } from "framer-motion";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-timber-white selection:bg-timber-highlight selection:text-white">

            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-10 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-medium text-timber-anthracite leading-tight">
                            İletişime Geçin
                        </h1>
                        <p className="text-lg text-timber-anthracite/70 font-light">
                            Projeleriniz için en doğru çözümleri birlikte üretelim.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-10"
                        >
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-timber-beige/10 flex items-center justify-center text-timber-highlight shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-semibold text-timber-anthracite mb-2">Adres</h3>
                                        <p className="text-timber-anthracite/70 leading-relaxed">
                                            Keresteciler Sitesi, No: 123,<br />
                                            Başakşehir / İstanbul
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-timber-beige/10 flex items-center justify-center text-timber-highlight shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-semibold text-timber-anthracite mb-2">Telefon</h3>
                                        <p className="text-timber-anthracite/70">
                                            <a href="tel:+905399471300" className="hover:text-timber-highlight transition-colors">
                                                +90 539 947 13 00
                                            </a>
                                        </p>
                                        <p className="text-timber-anthracite/70 text-sm mt-1">
                                            Pazartesi - Cumartesi: 08:30 - 18:30
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-timber-beige/10 flex items-center justify-center text-timber-highlight shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-semibold text-timber-anthracite mb-2">E-posta</h3>
                                        <p className="text-timber-anthracite/70">
                                            <a href="mailto:info@zeynelistanbullu.com" className="hover:text-timber-highlight transition-colors">
                                                info@zeynelistanbullu.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-sm overflow-hidden h-[300px] shadow-sm border border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850664222!2d28.87175245!3d41.0053702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa70400000001%3A0xc3c907d721110000!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Form (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 md:p-10 rounded-sm shadow-lg shadow-timber-anthracite/5 border border-gray-100"
                        >
                            <h3 className="text-2xl font-display font-semibold text-timber-anthracite mb-6">
                                Mesaj Gönderin
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-timber-anthracite/80 block">
                                            Ad Soyad
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-sm bg-gray-50 border border-gray-200 focus:border-timber-highlight focus:ring-1 focus:ring-timber-highlight outline-none transition-all duration-200"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-timber-anthracite/80 block">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-3 rounded-sm bg-gray-50 border border-gray-200 focus:border-timber-highlight focus:ring-1 focus:ring-timber-highlight outline-none transition-all duration-200"
                                            placeholder="05XX XXX XX XX"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-timber-anthracite/80 block">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-sm bg-gray-50 border border-gray-200 focus:border-timber-highlight focus:ring-1 focus:ring-timber-highlight outline-none transition-all duration-200"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-timber-anthracite/80 block">
                                        Mesajınız
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-sm bg-gray-50 border border-gray-200 focus:border-timber-highlight focus:ring-1 focus:ring-timber-highlight outline-none transition-all duration-200 resize-none"
                                        placeholder="Mesajınızı buraya yazabilirsiniz..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-timber-anthracite text-white py-4 rounded-sm font-medium hover:bg-timber-highlight transition-colors duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <span>Gönder</span>
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>


        </main>
    );
}
