"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import { products } from "@/data/products";

export function Products() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const getItemWidth = () => {
        if (typeof window === "undefined") return 304; // Default desktop width
        if (window.innerWidth >= 768) return 280 + 24; // md
        if (window.innerWidth >= 640) return 240 + 24; // sm
        return 200 + 16; // mobile
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const itemWidth = getItemWidth();
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const newScrollLeft = direction === "left"
                ? currentScroll - itemWidth
                : currentScroll + itemWidth;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    // Auto-scroll (Both Desktop & Mobile)
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (!isHovered) {
            intervalId = setInterval(() => {
                if (scrollContainerRef.current) {
                    const { scrollLeft } = scrollContainerRef.current;
                    const itemWidth = getItemWidth();
                    const singleSetWidth = products.length * itemWidth;

                    if (scrollLeft >= singleSetWidth) {
                        scrollContainerRef.current.scrollLeft = scrollLeft - singleSetWidth;
                        scrollContainerRef.current.scrollTo({
                            left: (scrollLeft - singleSetWidth) + itemWidth,
                            behavior: "smooth"
                        });
                    } else {
                        scrollContainerRef.current.scrollTo({
                            left: scrollLeft + itemWidth,
                            behavior: "smooth"
                        });
                    }
                }
            }, 3500);
        }

        return () => clearInterval(intervalId);
    }, [isHovered]);

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    // Duplicate products for infinite loop illusion
    const infiniteProducts = [...products, ...products];

    return (
        <section className="pt-16 pb-4 sm:pt-20 sm:pb-8 md:pt-28 md:pb-16 bg-timber-white text-timber-anthracite overflow-hidden" id="calismalarimiz">
            <div className="container mx-auto px-4 sm:px-6 relative">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-timber-anthracite"
                        >
                            Ürünlerimiz
                        </motion.h2>
                        <p className="hidden md:block text-timber-anthracite/60 mt-2 font-light">
                            Kalite ve estetiğin buluştuğu geniş ürün yelpazemiz.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-timber-anthracite/10 flex items-center justify-center hover:bg-timber-anthracite hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-timber-anthracite/10 flex items-center justify-center hover:bg-timber-anthracite hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    onMouseEnter={() => setIsHovered(true)} // Pause on hover
                    onMouseLeave={() => setIsHovered(false)} // Resume on leave
                    className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {infiniteProducts.map((item, index) => (
                        <motion.div
                            key={`${item.id}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % products.length) * 0.1 }}
                            className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] snap-center group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Hover Button */}
                                <div className="absolute bottom-6 left-6 opacity-100 lg:opacity-0 group-hover:opacity-100 translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-wide text-timber-anthracite shadow-lg">
                                        İncele <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>

                            {/* Minimal Text */}
                            <div className="space-y-1 px-1">
                                <h3 className="text-xl font-display font-bold text-timber-anthracite group-hover:text-timber-highlight transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-timber-anthracite/60 text-sm font-sans line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Spacer for right padding in scroll */}
                    <div className="w-1 flex-shrink-0" />
                </div>


            </div>
        </section>
    );
}
