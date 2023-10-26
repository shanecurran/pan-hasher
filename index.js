const crypto = require('crypto'); 

exports.handler = async ({ pan, cvv }) => {
    const hashedPan = await new Promise((resolve, reject) => {
        crypto.pbkdf2(pan, cvv, 100000, 64, 'sha512', (err, derivedKey) => { 
          if (err) { reject(err); } 
          
          resolve(derivedKey.toString('base64'));
        }); 
    });

    return { hashedPan };
}
