import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMXK0UxSM-cJ2O2e62WiNEFY5R8p3ORjM",
  authDomain: "luxury-nest.firebaseapp.com",
  projectId: "luxury-nest",
  storageBucket: "luxury-nest.appspot.com",
  messagingSenderId: "84079283726",
  appId: "1:84079283726:web:1afd95dee13de59443f65f",
};

const app = initializeApp(firebaseConfig);

export default app;
