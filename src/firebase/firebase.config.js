import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7gS8hsqm1cMD2XfeLfig36Ap3HXXImsU",
  authDomain: "my-pet-care-projects.firebaseapp.com",
  projectId: "my-pet-care-projects",
  storageBucket: "my-pet-care-projects.appspot.com",
  messagingSenderId: "1010141326123",
  appId: "1:1010141326123:web:632d5e7addb55d171ab36e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
