import json

districts = ["Antakya", "İskenderun", "Payas", "Dörtyol", "Belen", "Arsuz", "Samandağ", "Kırıkhan", "Reyhanlı", "Erzin", "Yayladağı", "Altınözü", "Hassa", "Kumlu", "Defne"]

products_info = [
    {"name": "Lambri", "slug": "lambri", "keyword": "Hatay lambri"},
    {"name": "Lambiri", "slug": "lambiri", "keyword": "Hatay lambiri"},
    {"name": "Kereste", "slug": "kereste", "keyword": "Hatay kereste"},
    {"name": "Keresteciler", "slug": "keresteciler", "keyword": "Hatay keresteciler"},
    {"name": "Kereste Fabrikası", "slug": "kereste-fabrikasi", "keyword": "Hatay kereste fabrikası"},
    {"name": "Plywood", "slug": "plywood", "keyword": "Hatay plywood"},
    {"name": "Şıngıl", "slug": "singil", "keyword": "Hatay şıngıl fiyatları"},
    {"name": "Shingle", "slug": "shingle", "keyword": "Hatay shingle fiyatları"},
    {"name": "İnşaatlık Kereste", "slug": "insaatlik-kereste", "keyword": "İnşaatlık kereste fiyatları"},
    {"name": "Ahşap Ev", "slug": "ahsap-ev", "keyword": "Ahşap ev"},
    {"name": "Çatı İşçiliği", "slug": "cati-isciligi", "keyword": "Çatı işçiliği"},
]

def format_slug(s):
    replacements = {'ı': 'i', 'İ': 'i', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c', ' ': '-'}
    res = s.lower()
    for k, v in replacements.items():
        res = res.replace(k, v)
    return res

results = []

delivery_messages = {
    "Antakya": "Antakya merkez ve tüm mahallelerine aynı gün nakliye avantajı ile stoktan hemen teslim.",
    "İskenderun": "İskenderun bölgesindeki şantiyelerinize özel toptan fiyatlar ve hızlı sevkiyat imkanı.",
    "Payas": "Payas sanayi bölgesi ve inşaat projeleri için toptan kereste tedariğimiz mevcuttur.",
    "Dörtyol": "Dörtyol'daki tüm yapı projeleriniz için uygun fiyat garantisiyle kapınıza teslim.",
    "Belen": "Belen ilçesindeki tüm adreslere kendi araçlarımızla güvenli nakliyat hizmeti sağlıyoruz.",
    "Arsuz": "Arsuz tatil bölgesi ve yazlık inşaatları için özel ahşap ve kereste çözümleri stoklarımızda.",
    "Samandağ": "Samandağ bölgesine haftanın her günü düzenli sevkiyat ve uygun fiyatlı malzeme imkanı.",
    "Kırıkhan": "Kırıkhan'daki çatı ve inşaat kereste ihtiyaçlarınız için en hesaplı toptan fiyatlar.",
    "Reyhanlı": "Reyhanlı projelerinize özel, yüksek metrajlı kereste ve plywood siparişlerinde indirimler.",
    "Erzin": "Erzin bölgesine geniş araç filomuzla sorunsuz ve zamanında şantiye teslimatı seçenekleri.",
    "Yayladağı": "Yayladağı ilçesinde yapmak istediğiniz ahşap ev ve çatı işleri için birinci sınıf malzeme.",
    "Altınözü": "Altınözü çevresindeki inşaatlarınıza uygun fiyatlı, yüksek kaliteli inşaat malzemesi garantisi.",
    "Hassa": "Hassa ilçesine özel, bütçe dostu kereste ve ahşap ürünlerde 2026 sezonu kampanyası.",
    "Kumlu": "Kumlu bölgesindeki toptan ve perakende alımlarınızda size özel fiyat teklifleri için arayın.",
    "Defne": "Defne ilçesinde yer alan fabrikamızdan anında yükleme ve en uygun üretici fiyatları."
}

for d in districts:
    for p in products_info:
        slug = f"{format_slug(d)}-{p['slug']}-fiyatlari"
        h1 = f"{d} {p['name']} Satışı ve Fabrika Fiyatları (2026)"
        
        results.append({
            "slug": slug,
            "h1": h1,
            "keyword_focus": p['keyword'],
            "local_context": delivery_messages[d]
        })

with open('d:/kereste/seo_dataset.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=4)
