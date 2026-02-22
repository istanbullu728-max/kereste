const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrl = "https://ayancikahsap.com.tr/img/product/b/WhatsApp-Image-2024-05-24-at-10.51.21.jpeg";
const outputPath = path.join(__dirname, 'public', 'kutuk-lambri.jpg');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download image. Status Code: ${response.statusCode}`);
        return;
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Image downloadable successfully to public/kutuk-lambri.jpg');
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { }); // Delete the file async. (But we don't check the result)
    console.error(`Error downloading image: ${err.message}`);
});
