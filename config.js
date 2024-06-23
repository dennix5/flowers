// config.js
FIREBASE_API_KEY="AIzaSyDglK2TjHEchfN23w5b5cW1ytiXqlYpBQs"
FIREBASE_AUTH_DOMAIN="flowers-8ef09.firebaseapp.com"
FIREBASE_DATABASE_URL="https://flowers-8ef09-default-rtdb.firebaseio.com"
FIREBASE_PROJECT_ID="flowers-8ef09"
FIREBASE_STORAGE_BUCKET="flowers-8ef09.appspot.com"
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID="155445589489"
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

export default firebaseConfig;
