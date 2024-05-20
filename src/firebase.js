import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAS92BLEfX0pvg0uaBnRsp-xvwtH7wMLeo",
  authDomain: "worker-a2dcd.firebaseapp.com",
  projectId: "worker-a2dcd",
  storageBucket: "worker-a2dcd.appspot.com",
  messagingSenderId: "983219792800",
  appId: "1:983219792800:web:fa1044b681f65c5cf112c5",
  measurementId: "G-4V0J6504CD"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider }