import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Games, SingleGame } from "./containers"
import { Navbar, Footer, ScrollToTop } from './components';
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <Router>
        <ScrollToTop />
        <main className="dark text-foreground bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/game/:id" element={<SingleGame />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </NextUIProvider>
  );
}

export default App;
