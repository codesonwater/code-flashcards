import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBb2f2-cHxcPrYMdoYkA6uxcUM68XzrIOE",
    authDomain: "code-flashcards.firebaseapp.com",
    projectId: "code-flashcards",
    storageBucket: "code-flashcards.appspot.com",
    messagingSenderId: "183290892669",
    appId: "1:183290892669:web:75628b5e99a339f528bc14",
    measurementId: "G-25T6T1C914"
  };
  
 export const app = initializeApp(firebaseConfig);