import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Home,
  Games,
  SingleGame,
  Giveaways,
  News,
  Sitemap,
  PageNotFound,
} from "./containers";
import { Navbar, Footer, ScrollToTop } from "./components";
import { NextUIProvider } from "@nextui-org/react";

export default function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ScrollToTop />
      <Navbar />
      <main className="dark text-foreground bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<SingleGame />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/news" element={<News />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
