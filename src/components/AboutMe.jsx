import bg from "../assets/images/unnamed.png";
// components/space.js
export default function AboutMe() {
  return (
    <section id= "about-me" 
    className="w-full bg-[#9584C6] text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* titulo */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
            SOBRE <br /> MÍ
          </h2>
         
        </div>

        {/* Columna 2: Textos */}
        <div className="flex flex-col justify-center space-y-6 text-lg">
          <p className="font-bold leading-snug">
            Soy Karen Correa, estudiante apunto de graduarme de Ingeniería de Sistemas y programadora traine.
          </p>
          <p className="opacity-90">
            Ahora estoy enfocada en el desarrollo de soluciones tecnológicas 
            inteligentes, combinando backend, arquitectura de software, IoT e inteligencia
             artificial.
          </p>
          <p className="font-medium italic">
            Me gusta aprender creando proyectos reales, mejorar mis habilidades.
          </p>
          <p className="text-sm font-bold uppercase tracking-widest pt-4">
            
          </p>
        </div>

        {/* Columna 3: Imagen del Mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <img src={bg} alt="Foto de yop" className="rounded-xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}