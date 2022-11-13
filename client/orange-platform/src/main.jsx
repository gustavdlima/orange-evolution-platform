import React from 'react'
import ReactDOM from 'react-dom/client'
// import './main.css'
import './styles/global.scss';
import RoutesApp from './components/routes/RoutesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
)
