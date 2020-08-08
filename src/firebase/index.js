import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.firestore();

export { storage, database };
