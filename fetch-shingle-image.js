const https = require('https');
const url = "https://standartizolasyon.com/urun/diger-urunler/sim-shingle-klasik-yuvarlak/";

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // Find all image sources
        const regex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const images = [];
        while ((match = regex.exec(data)) !== null) {
            if (match[1].includes('shingle') || match[1].includes('produk') || match[1].includes('uploads')) {
                images.push(match[1]);
            }
        }
        console.log(JSON.stringify(images, null, 2));
    });
}).on('error', (err) => {
    console.error("Error: " + err.message);
});
