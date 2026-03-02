"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu"; // Import the new component
import { usePathname } from "next/navigation";

import { navItems } from "@/data/navigation";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Anasayfada şeffaf, diğer sayfalarda opak header
    const isHomePage = pathname === "/";
    const isTransparent = isHomePage && !isScrolled;

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b",
                    isScrolled || !isHomePage
                        ? "bg-timber-white/95 backdrop-blur-xl py-3 border-timber-anthracite/10 shadow-glass top-0"
                        : "bg-transparent py-4 border-transparent top-0 md:top-2"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <Logo
                            className="h-10 md:h-12 w-auto transition-all duration-300"
                            light={isTransparent && !isMobileMenuOpen}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-semibold tracking-[0.08em] transition-all duration-300 hover:text-[#A08355] relative group py-1 px-0.5",
                                    isTransparent ? "text-white/90" : "text-timber-anthracite/80",
                                    pathname === item.href && "text-[#A08355]"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-[2px] bg-[#A08355]/70 transition-all duration-300 group-hover:w-full",
                                    pathname === item.href ? "w-full" : "w-0"
                                )}></span>
                            </Link>
                        ))}
                        <Link
                            href="/iletisim"
                            className={cn(
                                "hidden md:inline-flex items-center justify-center px-10 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-2",
                                "bg-[#A08355] hover:bg-[#8c734b] text-white"
                            )}
                        >
                            Teklif Al
                        </Link>
                    </nav>

                    {/* Mobile Floating Burger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={cn(
                                "relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg",
                                isTransparent
                                    ? "bg-white/10 backdrop-blur-md text-white border border-white/20"
                                    : "bg-timber-anthracite text-white"
                            )}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* New Mobile Overlay Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navItems={navItems}
            />
        </>
    );
}
