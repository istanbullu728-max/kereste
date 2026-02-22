const fs = require('fs');
const http = require('http');
const path = require('path');

const images = [
    {
        url: "http://www.hunerliormanurunleri.com/Resimler/buyuk/insaatlik-ve-kaliplik-kereste-88572.jpg",
        output: "hero-photo-1.jpg"
    },
    {
        url: "http://www.hunerliormanurunleri.com/Resimler/buyuk/insaatlik-ve-kaliplik-kereste-8917.jpg",
        output: "hero-photo-2.jpg"
    },
    {
        url: "http://www.hunerliormanurunleri.com/Resimler/buyuk/insaatlik-ve-kaliplik-kereste-44035.jpg",
        output: "hero-photo-3.jpg"
    }
];

function downloadImage(url, outputName) {
    return new Promise((resolve, reject) => {
        const outputPath = path.join(__dirname, 'public', outputName);
        const file = fs.createWriteStream(outputPath);
        console.log(`Downloading ${outputName} from ${url}...`);

        http.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed: ${response.statusCode} for ${url}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✓ Saved: ${outputName}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(outputPath, () => { });
            reject(err);
        });
    });
}

async function main() {
    for (const img of images) {
        try {
            await downloadImage(img.url, img.output);
        } catch (err) {
            console.error(`✗ Error downloading ${img.output}:`, err.message);
        }
    }
    console.log('\nAll downloads completed!');
}

main();
