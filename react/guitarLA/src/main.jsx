import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode | detecta problemas potenciales y proporciona advertencias
  <StrictMode>
    <App />
  </StrictMode>,
)
