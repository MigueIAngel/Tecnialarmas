import React, { createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const FirebaseContext = createContext(null);


export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase debe ser utilizado dentro de un proveedor FirebaseContext');
  }
  return context;
};

// Proveedor que envuelve tu aplicación con el objeto auth
export const FirebaseProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBl0HTREQ0l0at2kVGBrRJtXWrgY60Gwj4",
    authDomain: "webpage-d989a.firebaseapp.com",
    projectId: "webpage-d989a",
    storageBucket: "webpage-d989a.appspot.com",
    messagingSenderId: "115776354783",
    appId: "1:115776354783:web:3395b759f83247441c2c6a",
    measurementId: "G-TWR3D3D6FV"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
