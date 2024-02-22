import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import NovaPagina from "./components/pages/NovaPagina";
import Footer from "./components/organs/Footer";
import About from "./components/organs/About";
import Offers from "./components/organs/Offers";
import Testimonials from "./components/organs/Testimonials";
import Blogs from "./components/organs/Blogs";
import Contact from "./components/organs/Contact";
import Products from "./components/organs/Products";



function App() {

  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full h-full bg-zinc-900 font-nunito relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem_somos" element={<About />} />
        <Route path="sobre" element={<Offers />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/feedback" element={<Testimonials />} />
        <Route path="/noticias" element={<Blogs />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/nova-pagina/:categoria" element={<NovaPagina />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
