const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const { JSDOM } = require('jsdom');
const { Resvg } = require('@resvg/resvg-js');

async function convertSvgToPng() {
  try {
    // Create directory if it doesn't exist
    const dir = path.join(__dirname, '../public');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read the SVG file
    const svgPath = path.join(dir, 'og-image.svg');
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    // Convert SVG to PNG
    const resvg = new Resvg(svgContent, {
      background: 'rgba(0, 0, 0, 0)',
      fitTo: {
        mode: 'width',
        value: 1200,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // Save as PNG
    fs.writeFileSync(path.join(dir, 'og-image.png'), pngBuffer);
    
    // Create Twitter image (same content, different name)
    fs.writeFileSync(path.join(dir, 'twitter-image.png'), pngBuffer);

    console.log('OG images generated successfully!');
  } catch (error) {
    console.error('Error generating OG images:', error);
  }
}

convertSvgToPng(); 