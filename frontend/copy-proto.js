const fs = require('fs');
const path = require('path');

// Create dist/proto directory if it doesn't exist
const targetDir = path.resolve(__dirname, 'dist/proto');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy proto file
const sourceFile = path.resolve(__dirname, 'src/proto/user.proto');
const targetFile = path.resolve(targetDir, 'user.proto');

fs.copyFileSync(sourceFile, targetFile);
console.log(`Copied ${sourceFile} to ${targetFile}`);
