const fs = require('fs');
const https = require('https');
const path = require('path');

// The specific image found on the Gürsan website
const imageUrl = "https://gursankereste.com/assets/img/gursankerestearnavutkoy.jpg";
const outputPath = path.join('d:', 'kereste', 'public', 'ahsap-lambri.jpg');

console.log("Downloading Gursan image from:", imageUrl);

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download. Status Code: ${response.statusCode}`);
        file.close();
        fs.unlink(outputPath, () => { });
        return;
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log("Download completed.");
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { });
    console.error("Error downloading image:", err.message);
});
