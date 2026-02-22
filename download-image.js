const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrl = "https://images.unsplash.com/photo-1549405467-5fb5eebfdf54?q=80&w=2076&auto=format&fit=crop";
const outputPath = path.join('d:', 'kereste', 'public', 'hero-logs.jpg');

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, (response) => {
    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log("Download completed.");
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { }); // Delete the file async. (But we don't check the result)
    console.error("Error downloading image:", err.message);
});
