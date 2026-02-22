const fs = require('fs');
const http = require('http');
const path = require('path');

const imageUrl = "http://www.hunerliormanurunleri.com/Resimler/buyuk/insaatlik-ve-kaliplik-kereste-14034.jpg";
const outputPath = path.join(__dirname, 'public', 'kaliplik-kereste-new.jpg');

console.log("Downloading image from:", imageUrl);

const file = fs.createWriteStream(outputPath);

http.get(imageUrl, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download. Status Code: ${response.statusCode}`);
        file.close();
        fs.unlink(outputPath, () => { });
        return;
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log("Download completed successfully to public/kaliplik-kereste-new.jpg");
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { });
    console.error("Error downloading image:", err.message);
});
