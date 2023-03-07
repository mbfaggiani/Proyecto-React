import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCocLxt5lobF_zVyRLbO9xMJBPuDazsyJc",
  authDomain: "bft-react.firebaseapp.com",
  projectId: "bft-react",
  storageBucket: "bft-react.appspot.com",
  messagingSenderId: "502910370009",
  appId: "1:502910370009:web:46d077fad89e7512dcbec8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
