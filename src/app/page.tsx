
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";


import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-timber-white selection:bg-timber-highlight selection:text-white">

      <Header />
      <Hero />


      <Contact />
    </main>
  );
}
