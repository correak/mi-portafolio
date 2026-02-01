import { useState } from "react";
import { Link } from "react-router-dom"; 
import fotoPerfil from '../assets/images/log_owl.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#000] border-r border-white/10 flex items-center justify-between px-10 py-5 fixed top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <img src={fotoPerfil} alt="Foto de Perfil" className="w-26 h-16 object-cover" />
      </div>

      {/* Menú de navegación desktop */}
      <ul className="hidden md:flex gap-8 text-center text-sm font-semibold text-gray-300">
        <li className="hover:text-secondary transition">
          <a href="#hero">Inicio</a>
        </li>
        <li className="hover:text-secondary transition">
          <a href="#about-me">Sobre mí</a>
        </li>
        <li className="hover:text-secondary transition">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-secondary transition">
          <a href="#education">Educación</a>
        </li>
        <li className="hover:text-secondary transition">
          <Link to="/portfolio">Portafolio</Link> {/* Aquí es la ruta nueva */}
        </li>
        <li className="hover:text-secondary transition">
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      {/* Botón Descargar CV */}
      <div>
        <button
          onClick={() => window.open("/public/cv/karenCorrea-IngSistemas.pdf", "_blank")}
          className="hidden md:flex px-5 py-2 bg-gradient-to-r from-[#4d00ff] to-[#f000ff] text-black font-bold rounded-full shadow-[0_0_20px_rgba(77,0,255,0.4)] hover:shadow-[0_0_30px_rgba(240,0,255,0.6)] transition-all"
        >
          Descargar mi CV
        </button>
      </div>

      {/* Botón menú móvil */}
      <button
        className="md:hidden text-white text-2xl absolute top-4 right-4"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#211633] flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col gap-8 text-white text-xl uppercase font-semibold">
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <a href="#hero">Inicio</a>
            </li>
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <a href="#about-me">Sobre mí</a>
            </li>
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <a href="#education">Educación</a>
            </li>
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <Link to="/portfolio">Portafolio</Link> {/* Móvil también */}
            </li>
            <li className="hover:text-secondary cursor-pointer transition" onClick={() => setOpen(false)}>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
