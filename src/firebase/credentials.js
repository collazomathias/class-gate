import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBe9mZ6un5ES6gAtSphM41a1wnMSftpszI",
  authDomain: "class-gate.firebaseapp.com",
  projectId: "class-gate",
  storageBucket: "class-gate.appspot.com",
  messagingSenderId: "404331595759",
  appId: "1:404331595759:web:c5d9a519a01021ff50981a"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;