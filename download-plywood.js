const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrl = "https://fuatsonmez.com.tr/uploads/img/urunler/plywood-1738822792-3W6Yz.jpeg";
const outputPath = path.join(__dirname, 'public', 'plywood.jpg');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download image. Status Code: ${response.statusCode}`);
        return;
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Image downloadable successfully to public/plywood.jpg');
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { }); // Delete the file async. (But we don't check the result)
    console.error(`Error downloading image: ${err.message}`);
});
