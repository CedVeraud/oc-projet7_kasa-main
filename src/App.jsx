import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
