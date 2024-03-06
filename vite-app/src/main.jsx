import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

pokemons = [
  {
    name: 'Charizard',
    type: 'fire',
  },
  {
    name: 'Bulbasaur',
    type: 'grass',
  },
  {
    name: 'Squirtle',
    type: 'water',
  },
  {
    name: 'Pikachu',
    type: 'electric',
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
