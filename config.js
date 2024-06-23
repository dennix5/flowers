// config.js
require('dotenv').config();
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Конфигурация Firebase
        var firebaseConfig = {
            apiKey: "AIzaSyDglK2TjHEchfN23w5b5cW1ytiXqlYpBQs",
            authDomain: "flowers-8ef09.firebaseapp.com",
            databaseURL: "https://flowers-8ef09-default-rtdb.firebaseio.com",
            projectId: "flowers-8ef09",
            storageBucket: "flowers-8ef09.appspot.com",
            messagingSenderId: "155445589489",
            appId: 
        };
export default firebaseConfig;
