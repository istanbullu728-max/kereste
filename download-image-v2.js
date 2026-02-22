const fs = require('fs');
const https = require('https');
const path = require('path');

// Using a different, specific high-quality image of stacked lumber/logs from Unsplash
// Photo by "Markus Spiske" or similar relevant timber/lumber yard photo
const imageUrl = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop";
// Alternative fallback if needed: https://images.unsplash.com/photo-1628163618641-6e9f2256df16

const outputPath = path.join('d:', 'kereste', 'public', 'hero-logs.jpg');
const file = fs.createWriteStream(outputPath);

console.log("Downloading from:", imageUrl);

https.get(imageUrl, (response) => {
    // Handle redirects
    if (response.statusCode === 301 || response.statusCode === 302) {
        console.log("Redirecting to:", response.headers.location);
        https.get(response.headers.location, (redirectResponse) => {
            redirectResponse.pipe(file);
            redirectResponse.on('end', () => {
                file.close();
                console.log("Download completed (after redirect).");
            });
        });
        return;
    }

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
