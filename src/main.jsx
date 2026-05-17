import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/variables.css'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/services.css'
import './styles/pricing.css'
import './styles/footer.css'
import './styles/utilities.css'
import './styles/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

