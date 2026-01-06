const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'CSV-Product', 'wc-product-export-7-1-2026-1767726938925.csv');
const jsonOutputPath = path.join(__dirname, '..', 'src', 'data', 'products.json');

function splitCSVLine(line) {
    const row = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                // Handle escaped quotes ""
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    row.push(current.trim());
    return row;
}

function parseCSV(csvText) {
    const lines = csvText.split(/\r?\n/);
    if (lines.length === 0) return [];

    const headers = splitCSVLine(lines[0]);
    console.log('Headers found:', headers.length);

    const products = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const row = splitCSVLine(line);
        const productData = {};
        headers.forEach((header, index) => {
            productData[header] = row[index] || '';
        });

        if (productData.Type === 'simple' || productData.Type === 'variable') {
            // Exclude Tropical Paradise Plant variations
            if (productData.Name.startsWith('Tropical Paradise Plant')) {
                continue;
            }

            const images = productData.Images ? productData.Images.split(',').map(img => img.trim()) : [];

            products.push({
                id: productData.ID,
                name: productData.Name,
                type: productData.Type,
                price: productData['Regular price'] || productData['Sale price'],
                salePrice: productData['Sale price'],
                regularPrice: productData['Regular price'],
                categories: productData.Categories ? productData.Categories.split(',').map(c => c.trim()) : [],
                images: images,
                image: images[0] || '',
                description: productData.Description,
                shortDescription: productData['Short description']
            });
        }
    }

    return products;
}

try {
    console.log('Reading CSV file...');
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    console.log('Parsing CSV...');
    const products = parseCSV(csvData);

    // Ensure data directory exists
    const dataDir = path.dirname(jsonOutputPath);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    console.log(`Writing ${products.length} products to JSON...`);
    fs.writeFileSync(jsonOutputPath, JSON.stringify(products, null, 2));
    console.log('Done!');
} catch (error) {
    console.error('Error processing CSV:', error);
}
