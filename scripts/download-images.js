const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  backgrounds: {
    'hero.jpg': 'https://images.unsplash.com/photo-1577223625816-7546f13df25d',  // Stadium
    'cta.jpg': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018'    // Training
  },
  'sports/basketball': {
    'court.jpg': 'https://images.unsplash.com/photo-1546519638-68e109498ffc',    // Basketball court
    'training.jpg': 'https://images.unsplash.com/photo-1519861531473-9200262188bf', // Training
    'game.jpg': 'https://images.unsplash.com/photo-1627627256672-027a4613d028',    // Game
    'team.jpg': 'https://images.unsplash.com/photo-1504450758481-7338eba7524a'     // Team
  },
  'sports/football': {
    'field.jpg': 'https://images.unsplash.com/photo-1459865264687-595d652de67e',   // Football field
    'match.jpg': 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a',   // Match
    'training.jpg': 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e', // Training
    'team.jpg': 'https://images.unsplash.com/photo-1551958219-acbc608c6377'        // Team
  },
  'sports/volleyball': {
    'court.jpg': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1',   // Volleyball court
    'match.jpg': 'https://images.unsplash.com/photo-1592656094267-764a45160876',   // Match
    'training.jpg': 'https://images.unsplash.com/photo-1574271143515-5cddf8da19be', // Training
    'team.jpg': 'https://images.unsplash.com/photo-1544216717-3bbf52512659'        // Team
  },
  'sports/table-tennis': {
    'facility.jpg': 'https://images.unsplash.com/photo-1534158914592-062992fbe900', // Table tennis facility
    'match.jpg': 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827',    // Match
    'training.jpg': 'https://images.unsplash.com/photo-1611251135345-18c56206b863',  // Training
    'equipment.jpg': 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc'  // Equipment
  },
  members: {
    'member1.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',  // Female athlete
    'member2.jpg': 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',  // Male athlete
    'member3.jpg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'   // Female athlete
  }
};

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(`${url}?w=1200&q=80`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  for (const [directory, files] of Object.entries(images)) {
    const dirPath = path.join(__dirname, '..', 'public', directory);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Download all images in the directory
    for (const [filename, url] of Object.entries(files)) {
      const filepath = path.join(dirPath, filename);
      try {
        await downloadImage(url, filepath);
      } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
      }
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch(console.error); 