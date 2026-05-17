import Hero from './components/Hero'
import SocialLinks from './components/SocialLinks'
import './App.css'

export default function App() {
  return (
    <main className="app">
      <div className="noise" aria-hidden="true" />
      <div className="container">
        <Hero />
        <SocialLinks />
        <footer className="footer">
          <p>© {new Date().getFullYear()} Wilson. Feito com React + Vite.</p>
        </footer>
      </div>
    </main>
  )
}
