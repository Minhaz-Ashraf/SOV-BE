import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const key = Buffer.from(ENCRYPTION_KEY, 'base64');
// console.log(crypto.randomBytes(32).toString('base64'));

const algorithm = 'aes-256-cbc';
const IV_LENGTH = 16;

export const encryptData = (dataToEncrypt) => {
    try {
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(dataToEncrypt, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + ':' + encrypted;
    } catch (err) {
        console.log('Encryption Error:', err);
    }
};

export const decryptData = (data) => {
    try {
        const [iv, encrypted] = data?.split(':');
        const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
        let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    } catch (err) {
        console.log('Decryption Error:', err);
    }
};
