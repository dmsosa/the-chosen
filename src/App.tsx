import './assets/css/styles.css'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import UberMich from './components/UberMich/UberMich'
import Social from './components/Kontakt/Social'
import Footer from './components/Footer/Footer'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggler from './components/Widgets/ThemeToggler'
import Header from './components/Header/Header'

export type TThemeContext = {
  theme: string,
  setTheme: boolean;
}

function App() {

  return (
    <>
      <ThemeProvider>
          <header id="header" className="fixed-header" role="banner">
            <Header />
          </header>
          {/* NICHT UNTERSTUTZT */}
          <main id='main-wrap'>
            <ThemeToggler/>
            <Hero />
            <div id='page-content'>
              <Portfolio />
              <UberMich />
              <Social />
              <Footer />
            </div>
          </main>
      </ThemeProvider>
    </>
  )
}

export default App
