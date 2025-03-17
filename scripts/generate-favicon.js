const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
const dir = path.join(__dirname, '../public');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create a canvas
const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Create a gradient
const gradient = ctx.createLinearGradient(0, 0, size, size);
gradient.addColorStop(0, '#3b82f6'); // blue-500
gradient.addColorStop(1, '#8b5cf6'); // purple-500

// Draw a triangle
ctx.beginPath();
ctx.moveTo(size/2, 0);
ctx.lineTo(size, size);
ctx.lineTo(0, size);
ctx.closePath();

// Fill with gradient
ctx.fillStyle = gradient;
ctx.fill();

// Save as PNG
const pngBuffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(dir, 'favicon.png'), pngBuffer);

console.log('Favicon PNG generated successfully!'); 