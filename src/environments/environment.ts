// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh7_JUvy9-8wIBNV576z-BxaE9keVhCtc",
  authDomain: "fabric-mart-8c085.firebaseapp.com",
  databaseURL: "https://fabric-mart-8c085-default-rtdb.firebaseio.com",
  projectId: "fabric-mart-8c085",
  storageBucket: "fabric-mart-8c085.appspot.com",
  messagingSenderId: "128491775680",
  appId: "1:128491775680:web:f063a0fca905d144beef25",
  measurementId: "G-CD4HJLJCNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);