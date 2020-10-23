const crypto = require('crypto');
const fs = require('fs');

const pw = '96695412';
const fileName = 'CryptedPW';

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  crypto.pbkdf2(pw, salt, 100000, 64, 'sha512', (err, key) => {
    fs.writeFile(`${fileName}.txt`, key, () => {
      console.log(`file[${fileName}] write complete!`);
    });
  });
});