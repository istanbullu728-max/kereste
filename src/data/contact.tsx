import { Mail, MapPin, Phone } from "lucide-react";
import { ContactItem } from "@/types";
import React from "react";

export const contactItems: ContactItem[] = [
    {
        icon: MapPin,
        title: "Fabrika Adresi",
        content: <>GÜNEYSÖĞÜT Samandağ Yolu,<br />Güneysöğüt Köyü Yolu, 31160<br />Antakya / Hatay</>,
        delay: 0.1
    },
    {
        icon: Phone,
        title: "Telefon & WhatsApp",
        content: "+90 539 947 13 00",
        href: "tel:+905399471300",
        delay: 0.2
    },
    {
        icon: Mail,
        title: "E-Posta",
        content: "mehmetist048@gmail.com",
        href: "mailto:mehmetist048@gmail.com",
        delay: 0.3
    }
];
