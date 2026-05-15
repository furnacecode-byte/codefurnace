import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'

export function MainLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

