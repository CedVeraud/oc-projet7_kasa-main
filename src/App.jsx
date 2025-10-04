import { Routes, Route } from 'react-router-dom'
// LAYOUT
import Header from './components/header/header'
import Footer from './components/footer/footer'
// PAGES
import Home from './pages/Home/home'
import About from './pages/About/about'
import Logement from './pages/Logement/logement'
import Error from './pages/Error/404'

import Styles from './style/main.module.scss'

function App() {
  return (
    <div className={Styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
