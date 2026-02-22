
import { LucideIcon } from "lucide-react";

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface NavItem {
    name: string;
    href: string;
}

export interface ContactItem {
    icon: LucideIcon;
    title: string;
    content: React.ReactNode | string;
    href?: string;
    delay?: number;
}
