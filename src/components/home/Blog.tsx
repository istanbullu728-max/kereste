"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
    return (
        <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32" id="blog">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-timber-anthracite leading-tight">
                        Blog & <span className="text-timber-highlight">Makaleler</span>
                    </h2>
                    <p className="mt-4 text-timber-anthracite/60 text-sm sm:text-base font-light max-w-xl mx-auto lg:mx-0">
                        Ahşap dünyasındaki son trendler, teknik bilgiler ve projelerimize dair güncel yazılar.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={post.image}
                                        alt={`${post.title} - Hatay kereste ve mobilya rehberi`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-timber-anthracite">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <div className="text-timber-highlight text-[11px] font-bold tracking-widest uppercase">
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-timber-anthracite group-hover:text-timber-highlight transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-timber-anthracite/60 text-sm font-sans line-clamp-3 leading-relaxed">
                                        {post.summary}
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-timber-anthracite text-xs font-bold tracking-wide uppercase group-hover:text-timber-highlight transition-colors">
                                    Devamını Oku
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
