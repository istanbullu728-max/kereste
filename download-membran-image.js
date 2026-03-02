const https = require('https');
const fs = require('fs');

https.get('https://izolasyondevi.com/urun/ode-luna-maxx-kirmizi-membran', { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
        let match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*id=["']ws-product-image["']/i);
        if (!match) match = html.match(/<img[^>]*src=["']([^"']*ode-luna-maxx-kirmizi-membran[^"']*\.jpg)["']/i);
        if (!match) match = html.match(/<a[^>]*href=["']([^"']*ode-luna-maxx-kirmizi-membran[^"']*\.jpg)["']/i);

        if (match) {
            let imgUrl = match[1];
            if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
            else if (imgUrl.startsWith('/')) imgUrl = 'https://izolasyondevi.com' + imgUrl;

            console.log("Downloading", imgUrl);
            const file = fs.createWriteStream('public/membran-v3.jpg');
            https.get(imgUrl, response => {
                response.pipe(file);
                file.on('finish', () => console.log('DONE'));
            });
        }
    });
});
