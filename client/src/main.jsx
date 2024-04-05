import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
  <React.StrictMode>
    <App />
    <ToastContainer
   
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    bodyClassName="toastBody"
    transition: Bounce/>
  </React.StrictMode>,
  </Authprovider>
);
