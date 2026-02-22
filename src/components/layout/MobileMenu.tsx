"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: { name: string; href: string }[];
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, delay: 0.3 }
    }
};

const menuVariants: Variants = {
    hidden: { y: "-100%" },
    visible: {
        y: "0%",
        transition: { type: "spring", damping: 25, stiffness: 200 } as const
    },
    exit: {
        y: "-100%",
        transition: { type: "spring", damping: 25, stiffness: 200 } as const
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } as const
    },
    exit: { opacity: 0, y: 20 }
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Blur Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[10px]"
                        onClick={onClose}
                    />

                    {/* Menu Content */}
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 left-0 right-0 z-50 bg-timber-white rounded-b-[32px] overflow-hidden shadow-2xl origin-top"
                    >
                        <div className="p-6 pt-24 pb-12 flex flex-col items-center">

                            {/* Close Button (Absolute position to match burger) */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-12 h-12 bg-timber-anthracite/5 rounded-full flex items-center justify-center active:scale-95 transition-transform"
                            >
                                <X className="text-timber-anthracite" size={24} />
                            </button>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col gap-6 w-full text-center"
                            >
                                {navItems.map((item) => (
                                    <motion.div key={item.name} variants={itemVariants}>
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className={`
                                                block text-3xl font-display font-medium tracking-tight
                                                ${pathname === item.href ? 'text-timber-highlight' : 'text-timber-anthracite'}
                                                active:scale-95 transition-transform
                                            `}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div variants={itemVariants} className="pt-6">
                                    <Link
                                        href="/iletisim"
                                        onClick={onClose}
                                        className="inline-block w-full py-4 bg-timber-anthracite text-white font-sans font-bold text-lg rounded-full active:scale-95 transition-transform shadow-lg"
                                    >
                                        Teklif Al
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
