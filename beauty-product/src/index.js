import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import Appcontextprovider from './context/contexted';
import SignProvider from './context/signupcontext';
import Logined from './context/logincontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SignProvider>
  <Logined>
  
  <Appcontextprovider>
  <ChakraProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ChakraProvider>
  </Appcontextprovider>
  
  </Logined>
  </SignProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
