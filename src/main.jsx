import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const Insertion = document.getElementById('root');
createRoot(Insertion).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
