const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execFileSync } = require('child_process');

const files = [
  'src/data/landingData.ts',
  'src/components/HeroSection.tsx',
  'src/components/OpportunitySection.tsx',
  'src/components/PricingSection.tsx',
  'src/components/GuaranteeSection.tsx',
  'src/components/IncludedVideoSection.tsx',
  'src/components/CatholicUpsellModal.tsx'
];

const urlRegex = /(https?:\/\/[^"'`\s)]+\.(?:png|jpeg|jpg|webp))/gi;
const urls = new Set();

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      urls.add(match[1]);
    }
  }
});

console.log('Total unique URLs found:', urls.size);

const outDir = path.join(__dirname, '../public/optimized');
fs.mkdirSync(outDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

function getSafeName(url) {
  const base = path.basename(url.split('?')[0]);
  const ext = path.extname(base);
  const nameWithoutExt = path.basename(base, ext)
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .substring(0, 35);
  return `${nameWithoutExt}.webp`;
}

async function run() {
  const urlMap = {};
  const list = Array.from(urls);

  for (let i = 0; i < list.length; i++) {
    const url = list[i];
    const safeName = getSafeName(url);
    const destWebp = path.join(outDir, safeName);
    const tmpSrc = path.join('/tmp', `raw_${i}_${path.basename(url.split('?')[0])}`);

    try {
      if (!fs.existsSync(destWebp) || fs.statSync(destWebp).size < 100) {
        process.stdout.write(`[${i + 1}/${list.length}] Converting ${path.basename(url)}... `);
        await downloadFile(url, tmpSrc);
        
        let resizeArg = '600x600>';
        if (url.includes('M4QGwBZ')) resizeArg = '900x>';
        else if (url.includes('VpoLfuU')) resizeArg = '700x>';
        else if (url.includes('chatgpt-image')) resizeArg = '380x380>';
        else if (url.includes('testimonial') || url.includes('w5n2dha') || url.includes('e817k9n')) resizeArg = '480x>';
        
        execFileSync('convert', [
          tmpSrc,
          '-resize', resizeArg,
          '-quality', '80',
          '-define', 'webp:lossless=false',
          destWebp
        ]);
        
        if (fs.existsSync(tmpSrc)) fs.unlinkSync(tmpSrc);
        const newSize = fs.statSync(destWebp).size;
        console.log(`OK (${(newSize / 1024).toFixed(1)} KB)`);
      }
      urlMap[url] = `/optimized/${safeName}`;
    } catch (err) {
      console.log(`Failed: ${err.message}. Keeping original.`);
      urlMap[url] = url;
    }
  }

  fs.writeFileSync(path.join(__dirname, 'url-map.json'), JSON.stringify(urlMap, null, 2));
  console.log('Mapping saved to scripts/url-map.json');
}

run();
