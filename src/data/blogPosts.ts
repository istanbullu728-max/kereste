export interface BlogPost {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    category: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "2026 Hatay Kereste Fiyatları ve İnşaat Sektörü",
        summary: "Hatay ve Antakya bölgesinde inşaatlık kereste, lambri ve plywood fiyatlarındaki güncel değişimleri ve projeleriniz için en uygun zamanı analiz ediyoruz.",
        date: "9 Mart 2026",
        image: "/hero-bg-forest.jpg",
        category: "Piyasa",
        slug: "2026-hatay-kereste-fiyatlari"
    },
    {
        id: 2,
        title: "Antakya'da Ev Dekorasyonunda Lambri Kullanımı",
        summary: "Ahşap duvar panellerinin (lambri) avantajlarını ve Hatay iklimine uygunluğunu, modern ve geleneksel ev dekorasyonu trendleriyle birlikte inceleyin.",
        date: "9 Mart 2026",
        image: "/ahsap-lambri-v2.jpg",
        category: "Dekorasyon",
        slug: "antakyada-lambri-kullanimi"
    },
    {
        id: 3,
        title: "İnşaatlık Kereste Seçerken Dikkat Edilmesi Gerekenler",
        summary: "Dayanıklı yapılar için doğru kereste seçimi kritiktir. Çatı karkasından kalıplık keresteye kadar Hatay'daki projeleriniz için teknik rehber.",
        date: "1 Mart 2026",
        image: "/kaliplik-kereste-new.jpg",
        category: "Rehber",
        slug: "insaatlik-kereste-secimi"
    },
    {
        id: 4,
        title: "Antakya'da Silinmiş Kereste ve Kapı Sereni Üretimi",
        summary: "Mobilya ve kapı imalatında kullanılan yüksek kaliteli silinmiş kereste ve kapı sereni ürünlerimizin teknik özelliklerini inceleyin.",
        date: "25 Şubat 2026",
        image: "/kapi-sereni-v2.png",
        category: "Üretim",
        slug: "silinmis-kereste-uretimi"
    }
];
