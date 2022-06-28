import React from 'react';
import ReactDOM from "react-dom/client";
import { CounterApp } from './Components/CounterApp';
import { FirstApp } from './FirstApp';

// Aplicar estilos CSS globales
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={2}/>
    </React.StrictMode>
)