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
        <Navbar />
        <main className="dark text-foreground bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/game/:id" element={<SingleGame />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </NextUIProvider>
  );
}

export default App;
