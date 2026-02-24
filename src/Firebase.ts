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
};

let app: FirebaseApp | undefined;
let database: Database | undefined;

// Only initialize if we have the project ID (prevents build crashes)
if (firebaseConfig.projectId) {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  database = getDatabase(app);
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
