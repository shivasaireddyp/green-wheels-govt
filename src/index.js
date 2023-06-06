import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserLoginContextStore from "./contexts/UserLoginContextStore";
import AudiBooking from './components/AudiBooking/AudiBooking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <UserLoginContextStore>
            {/* <AudiBooking> */}
            <App />
            {/* </AudiBooking> */}
    </UserLoginContextStore>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
