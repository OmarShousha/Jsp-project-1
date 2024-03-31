import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/Home/Home.css'
import './assets/Work/Work.css'
import './assets/Title/Title.css'
import './assets/About/About.css'
import './assets/Recipes/Recipes.css'
import './assets/Testymonials/Testymonials.css'
import './assets/Contact/Contact.css'
import './assets/Work/Work.media.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
