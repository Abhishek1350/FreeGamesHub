import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Games, SingleGame, Sitemap } from "./containers"
import { Navbar, Footer, ScrollToTop } from './components';
import { NextUIProvider } from '@nextui-org/react'

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ScrollToTop />
      <Navbar />
      <main className="dark text-foreground bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game/:id" element={<SingleGame />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
    </NextUIProvider>
  );
}

export default App;
