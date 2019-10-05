import firebase from "firebase";
import "helpers/firestore";

if (!firebase.apps) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID
  });
}

// DATABASE

const db = firebase.firestore();

export const database = {
  users: db.collection("users"),
  colors: db.collection("colors")
};
