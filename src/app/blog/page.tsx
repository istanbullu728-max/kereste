"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Blog } from "@/components/home/Blog";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-timber-white selection:bg-timber-highlight selection:text-white">
            <Header />

            <div className="pt-20">
                <Blog />
            </div>

            <Footer />
        </main>
    );
}
