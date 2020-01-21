// Componente Raiz del proyecto
import React from 'react';  // importamos mod React
import logo from './logo.svg'; // importamos el fich
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <p>
                    Estamos en el fichero <code>App.js</code>
                </p>
            </header>
        </div>
    );
}
export default App;
