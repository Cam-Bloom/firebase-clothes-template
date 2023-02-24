// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDgWxYISlek7GNw7jjE31XSSVH6hbzoSQE",
	authDomain: "clothes-tinder.firebaseapp.com",
	projectId: "clothes-tinder",
	storageBucket: "clothes-tinder.appspot.com",
	messagingSenderId: "89550191144",
	appId: "1:89550191144:web:2712387d96fbdbfe99531d",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
