import { NavItem } from "@/types";

export const navItems: NavItem[] = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünlerimiz", href: "/products" }, // Reverted to section scroll if on home, but let's keep it as /products for now, user can change logic. 
    // Wait, original Header has: { name: "Ürünlerimiz", href: "/products" } ? 
    // Checking Header.tsx... yes: { name: "Ürünlerimiz", href: "/products" }
    // But page.tsx has <Products /> section. 
    // The user might have a separate page or it scrolls. 
    // Let's stick to what was in Header.tsx.
    { name: "İletişim", href: "/iletisim" },
];
