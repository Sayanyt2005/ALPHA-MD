const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA62Wy46rxhaGXyWqqa0094ullg4U4LsNvuMogzIUGIwBVxWm7ahHGUU654wySCJt5UXyUP0IEe3upKXsdDrSZgIUsNb3r1oXvgN5kVA8xBfQ+Q6UJDkjhptLdikx6ACziiJMQBuEiCHQAf7ooNT8A6cW+zm1c3Je6hkv4Wm+EVL6QGuW9/F0bJHQ6d+DxzYoq12WBO8YvLPTOO9tONTVVoPTdgIPgdBlaXGm6AxLPvJ8d5CPaRQ4xT14bCyihCR5bJd7fMQEZUN8cVFCPoaPul1+usxie82MXhCgngO1/ELpiQwjGZKsXvSsQ3r2jJX3MfxL6xxVye5uGYbnbnq3KuoZx6V4+7C25L0busXgLmYBqy3PuOHTJM5x2A9xzhJ2+XDc11MeLnkF0bCw873AUW91XpxH/gC6vdYdjeQwGWSLSXSy6cfAOSOuhhNzq8zKk9Ib03A3OpDQXCtMj/ujrnAH/TqsXeSk0ltwl7zmyuHfxL3o4p27HJuDRWabztFIe6d6sRx6olib69GRVkMvPhne0Bfjj+GfLe5i6DOcL9LRQYF9OYhayJtlrW2/2m6HR0zdKZz3Std5E3fEKvIu5cFo8dKqle5246I/PZwPM7PUtFar5fu+2n1w5uN44+cyiScpnp+qyj4lJN1ks7uCbPqHcIMs7nRYHq/c3SEedz1vZo2T+v5Z0QFf+iHo8I9tQHCcUEYQS4q8WRMEvQ1QeJ7jgGD2HF4Qz9H+qm6vBS6WCVn7Pa/FU7SOKmulmbPZWDIFIoeusN5r96ANSlIEmFIc9hLKCnIZY0pRjCnofPO8U41ogo8Fw4MkBB2g87qkyqqgy4ryH/p1vUeMorL8OscMtEFEiuMYgw4jFW6D5w9szbBMQVc5SxNM0eahwKmCrOi2KamqrcBG4vHmdJEcMWXoWIIOr0qqyjd+HttfhkPULEEWOVvjHIuTbFOyeU02Nd3WNM42HfV9DlH5UhyKoZmcLnBQN0XZhoJlmbYjaLwIDUuRNPt9Dpn7UhyODTlLUSSR0yTFFCHUFVHjVZPTeMuGmvQ+h/LFOCxJlSBvOKqmObagKIIg8YIODV6TLMtWtX/g0B+/bYMcP7Bbf2mqQuTbIEoIZcu8KrMCha/N5/UhCoKiytn8kgewucAEdN4sY8aSPKaNsipHJNgnZwwbHaAToYziPwoRExy+ankZLrAIm/4wGQ30kT5TQMPeGPpLbDriZ8KT3TJVFzhN4xRV4zlObl5s1tsgR40t8PTp5/8/ffrpt6dPP//4cv7hq6df//vL06//+76J1ouOxm2IGUoyCjoATqY4UW1ou5cxHdvdrmHHBowN8Kfu1z536yN4MIzd8eDs5kPPV3dU8VcIJUdhZVB/ZanlPuB9Oo3csO7ff8YI6ACB+YpFuZaUjo0K47VDXGfCK9dDXp4Pm+7Esi+6a9rydlfqkAaOl60WFuZ0ZSzPhYE8cWv5Om9V+grP2fphN64vsWwa9423EJ+TAL911h3V50qAED1Uvt0iYa2zeiNu40O8zLu9mQgzmPJ1jsJepHpHMV/Ydq/ur3cZJknBjvRkzq5p0qMjO097eI31ZTVJvVsHfp4A2cvkTV56Y/J8GyX4eZC97M0/7vANvElE7rH9xsbLaPyb8WJuknlhXeHuKl8O3amgTo/O+liULPNGXcdrKf5msh5Z+VUMIHhsKqLMEIsKcmz+XPKQFM8JRIqqyex+HhXvOINmvw+Nm/IMUWb8WS2fa9D87S2XFGUP0X2Tv5Ffw2GT+hejLOcMsdfiA0ZzOH0PPP4OxCc3XD8KAAA=',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "yes",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "💛,🧡,🤍,💙,🤎,💜,🩵,🩷",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'no',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'no',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
