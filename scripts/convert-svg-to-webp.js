const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory to process
const imgDir = path.join(__dirname, '..', 'public', 'img');

/**
 * Recursively find all SVG files in a directory
 */
function findSVGFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively search subdirectories
      findSVGFiles(filePath, fileList);
    } else if (file.endsWith('.svg')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Convert SVG to WebP with high quality
 */
async function convertSVGToWebP(svgPath, force = false) {
  try {
    const webpPath = svgPath.replace('.svg', '.webp');
    
    // Skip if WebP already exists (unless force is true)
    if (fs.existsSync(webpPath) && !force) {
      console.log(`⏭️  Skipping ${path.basename(svgPath)} - WebP already exists`);
      return { success: true, skipped: true };
    }

    // Get SVG metadata to determine dimensions
    const metadata = await sharp(svgPath).metadata();
    
    // For better quality on high-DPI displays, ensure minimum resolution
    // If SVG is small, render at higher resolution (2x for retina displays)
    let width = metadata.width;
    let height = metadata.height;
    
    // If dimensions are very small (< 500px), scale up for better quality
    const minDimension = 500;
    if (width && height && (width < minDimension || height < minDimension)) {
      const scale = Math.ceil(minDimension / Math.max(width, height));
      width = width * scale;
      height = height * scale;
    }

    // Convert SVG to WebP with lossless encoding for perfect quality
    let sharpInstance = sharp(svgPath, {
      density: 288 // High DPI (288 = 3x retina) for crisp rendering
    });
    
    if (width && height && (width !== metadata.width || height !== metadata.height)) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      });
    }

    await sharpInstance
      .webp({ 
        lossless: true, // Use lossless encoding for perfect quality (no compression artifacts)
        effort: 6, // Higher effort for better compression (still applies to lossless)
        quality: 100 // Quality setting (used as hint for lossless)
      })
      .toFile(webpPath);

    const svgSize = fs.statSync(svgPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / svgSize) * 100).toFixed(1);

    console.log(`✅ Converted ${path.basename(svgPath)} → ${path.basename(webpPath)} (${savings}% smaller)`);
    return { success: true, skipped: false };
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(svgPath)}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Main conversion function
 */
async function main() {
  // Check for --force flag to re-convert existing files
  const force = process.argv.includes('--force') || process.argv.includes('-f');
  
  if (force) {
    console.log('🔄 Force mode: Re-converting all files (including existing WebP files)\n');
  }

  console.log('🔍 Finding all SVG files...\n');
  
  const svgFiles = findSVGFiles(imgDir);
  
  if (svgFiles.length === 0) {
    console.log('No SVG files found!');
    return;
  }

  console.log(`Found ${svgFiles.length} SVG file(s) to convert\n`);
  console.log('Starting conversion with lossless WebP encoding (maximum quality)...\n');

  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const svgFile of svgFiles) {
    const result = await convertSVGToWebP(svgFile, force);
    
    if (result.success) {
      if (result.skipped) {
        skippedCount++;
      } else {
        successCount++;
      }
    } else {
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Conversion Summary:');
  console.log(`   ✅ Converted: ${successCount}`);
  console.log(`   ⏭️  Skipped: ${skippedCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📁 Total: ${svgFiles.length}`);
  console.log('='.repeat(50));
}

// Run the conversion
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

