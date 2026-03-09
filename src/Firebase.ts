import { FirebaseApp, getApps, getApp, initializeApp } from "firebase/app";
import {
  Database,
  getDatabase,
  ref,
  onDisconnect,
  onValue,
  set,
  get,
  child,
  update,
  serverTimestamp,
  increment,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

let app: FirebaseApp | undefined;
let database: Database | undefined;

// Defensive initialization check
const isFirebaseEnabled =
  process.env.NEXT_PUBLIC_USE_FIREBASE !== "false" &&
  Boolean(firebaseConfig.apiKey) &&
  Boolean(firebaseConfig.projectId) &&
  !firebaseConfig.projectId?.includes("default") &&
  !firebaseConfig.databaseURL?.includes("default");

if (isFirebaseEnabled) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    // Only attempt database connection if in browser and enabled
    if (typeof window !== "undefined") {
      // Check for presence of URL or projectId to avoid guessing errors
      if (firebaseConfig.databaseURL || firebaseConfig.projectId) {
        database = getDatabase(app);
      }
    }
  } catch (error: any) {
    console.warn("Firebase Init Error:", error.message);
  }
}

export {
  database,
  ref,
  onDisconnect,
  onValue,
  set,
  get,
  child,
  update,
  serverTimestamp,
  increment,
};
