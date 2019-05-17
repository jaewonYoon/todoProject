import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { configKey } from "./config";

// Initialize Firebase
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
