import * as firebase from "firebase";
import "firebase/firestore";
import { ColorType, PaletteType } from "./types";
import axios from "axios";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: "brett-colors"
  });
}

const db = firebase.firestore();

export const database = {
  colors: db.collection("colors"),
  palettes: db.collection("palettes")
};
