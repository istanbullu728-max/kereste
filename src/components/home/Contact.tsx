"use client";

import { motion } from "framer-motion";
import { contactItems } from "@/data/contact";
import { MapPin } from "lucide-react";

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.6900768491655!2d36.113866!3d36.174095699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525c499b501e5af%3A0x5fffde3098fd0876!2zR8O8bmV5c8O2xJ_DvHQgS8O2ecO8IFlvbHUgJiBBbnRha3lhIFNhbWFuZGHEnyBZb2x1LCBHw7xuZXlzw7bEn8O8dCwgMzExNjAgRGVmbmUvSGF0YXk!5e0!3m2!1str!2str!4v1771336417639!5m2!1str!2str";

export function Contact() {
    return (
        <section className="bg-gradient-to-br from-timber-white via-stone-50 to-timber-beige/20 pt-10 pb-12 sm:pt-14 md:pt-16 md:pb-28 relative overflow-hidden" id="iletisim">

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-5 sm:mb-12 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-timber-anthracite leading-tight">
                        İletişim & <span className="text-timber-highlight">Lokasyon</span>
                    </h2>
                    <p className="hidden sm:block mt-2 sm:mt-3 text-timber-anthracite/60 text-sm sm:text-base font-light max-w-xl mx-auto lg:mx-0">
                        Fabrikamızı ziyaret edin veya projeleriniz için doğrudan bizimle iletişime geçin.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">

                    {/* Contact Info Cards — mobilde üstte */}
                    <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 order-1 lg:order-1">
                        {contactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                className="group relative p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center"
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-timber-highlight/10 flex items-center justify-center text-timber-highlight">
                                        <item.icon size={19} strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-0.5 min-w-0 flex-1">
                                        <h3 className="font-display font-bold text-sm sm:text-base text-timber-anthracite">
                                            {item.title}
                                        </h3>
                                        {item.href ? (
                                            <a href={item.href} className="block text-timber-anthracite/65 text-xs sm:text-sm font-medium hover:text-timber-highlight transition-colors leading-relaxed truncate">
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p className="text-timber-anthracite/65 text-xs sm:text-sm font-medium leading-relaxed">
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map — Direct load, mobilde altta */}
                    <div className="lg:col-span-7 order-2 lg:order-2 h-[200px] sm:h-[320px] lg:h-full min-h-[300px] lg:min-h-[400px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg relative border-2 border-gray-100">
                        <iframe
                            src={MAP_SRC}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Fabrika Konumu"
                            className="w-full h-full"
                        />
                    </div>

                </div>
                {/* Local SEO / Service Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-timber-anthracite/10"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h3 className="text-2xl font-display font-bold text-timber-anthracite">Tüm Hatay Bölgesine Hizmet Veriyoruz</h3>
                        <p className="text-timber-anthracite/60 leading-relaxed font-sans">
                            Zeynel İstanbullu Kereste, <strong className="text-timber-anthracite">Hatay'ın en köklü kereste fabrikası</strong> olarak sadece Antakya'da değil; İskenderun, Defne, Samandağ, Arsuz, Dörtyol ve Payas bölgelerine de en kaliteli ahşap ürünlerini ve inşaatlık keresteleri ulaştırmaktadır.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {["Antakya", "İskenderun", "Defne", "Samandağ", "Arsuz", "Dörtyol", "Kırıkhan", "Reyhanlı", "Payas"].map((city) => (
                                <span key={city} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full border border-gray-200 uppercase tracking-tighter">
                                    {city} Kereste
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
