import React from 'react'
import ReactDOM from 'react-dom/client'
import {Saludo} from "./components/Saludar.jsx";
import {CounterApp} from "./CounterApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <Saludo />
        <CounterApp/>
    </div>
)
