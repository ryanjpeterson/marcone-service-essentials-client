import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCOLK7xsAdurv8p-0SzTtv3_E9lLWPlEkg',
  authDomain: 'marcone-service-essentia-e8e41.firebaseapp.com',
  projectId: 'marcone-service-essentia-e8e41',
  storageBucket: 'marcone-service-essentia-e8e41.appspot.com',
  messagingSenderId: '58918380633',
  appId: '1:58918380633:web:474b18a055217feaae3d48',
  measurementId: 'G-CSEQEL59GM',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
