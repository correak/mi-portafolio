import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import bg from "../assets/images/yop_i.jpg";


export default function Hero() {
  return (
<section 
  id="hero"
  className="relative h-[100dvh] w-full flex flex-col justify-center px-12 md:px-60 overflow-hidden bg-zinc-900"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Overlay: Esto ayuda a que el texto se lea mejor si la foto es muy brillante */}
     <div className="absolute inset-0 bg-black/40 z-0"></div>


      <div className="relative z-10"> {/* Contenedor para asegurar que el texto esté arriba */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          <span className="text-primary">Karen </span>{" "}
          <span className="text-secondary">Correa</span>
        </h1>

        <p className="mt-16 text-lg font-mono text-white tracking-[0.2em] uppercase max-w-2xl">
          Holaa!! bienvenid@ a mi portafolio web como programadora trainee...
        </p>

        <p className="mt-4 text-gray-400">
          Si quieres enviarme un mensaje, escríbeme a mi correo: {" "}
          <a href="mailto:karendelpilar.correa@gmail.com" className="text-secondary underline hover:text-white transition">
            karendelpilar.correa@gmail.com
          </a>
        </p>

        {/* Botón con sombra de resplandor */}
        <button
          onClick={() => window.open("/cv/karenCorrea-IngSistemas.pdf", "_blank")}
          className="mt-10 px-8 py-3 bg-secondary text-dark font-bold rounded-xl shadow-[0_0_20px_rgba(0,245,160,0.4)] hover:shadow-[0_0_30px_rgba(0,245,160,0.6)] transition-all"
        >
          Descargar mi CV
        </button>

        {/* Iconos de Redes Sociales */}
        <div className="flex gap-6 mt-12">
          {[ 
            { icon: <FaLinkedin />, color: "hover:shadow-[0_0_15px_#0077b5]", bg: "bg-[#0077b5]", link: "https://www.linkedin.com/in/karen-cor217/" },
            { icon: <FaGithub />, color: "hover:shadow-[0_0_15px_#333]", bg: "bg-[#333]", link: "https://github.com/correak" },
            { icon: <FaInstagram />, color: "hover:shadow-[0_0_15px_#d60056]", bg: "bg-[#d60056]", link: "https://www.instagram.com/2103_correa.k4/" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition-all border border-white/20 ${social.bg} ${social.color} hover:scale-110`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}