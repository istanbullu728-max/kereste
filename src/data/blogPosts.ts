export interface BlogPost {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Modern Ahşap Evlerin Avantajları",
        summary: "Doğallık ve konforun buluştuğu ahşap ev modelleri, enerji verimliliği ve deprem dayanıklılığı ile öne çıkıyor.",
        date: "12 Mart 2024",
        image: "/blog/cabin-view.png",
        category: "Mimari"
    },
    {
        id: 2,
        title: "Kaliteli Kereste Seçimi Nasıl Yapılır?",
        summary: "Projelerinizde uzun ömürlü sonuçlar almak için ahşap dokusu, nem oranı ve ağaç türü seçiminde dikkat etmeniz gerekenler.",
        date: "5 Mart 2024",
        image: "/blog/wood-texture.png",
        category: "Rehber"
    },
    {
        id: 3,
        title: "İnşaat Sektöründe Ahşabın Geleceği",
        summary: "Sürdürülebilir yapı malzemeleri arasında ilk sırada yer alan ahşabın modern inşaat projelerindeki yükselişi.",
        date: "28 Şubat 2024",
        image: "/blog/construction.png",
        category: "Sektör"
    },
    {
        id: 4,
        title: "Sürdürülebilir Ormancılık ve Ahşap Üretimi",
        summary: "Doğayı koruyarak üretim yapmanın önemi ve gelecek nesillere daha yeşil bir dünya bırakma hedefimiz.",
        date: "20 Şubat 2024",
        image: "/blog/forestry.png",
        category: "Vizyon"
    }
];
