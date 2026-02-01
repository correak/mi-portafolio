import upcLogo from "../assets/images/upc_logo.png";
import university from "../assets/images/share-portal.jpg";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full bg-[#9584C6] text-white py-16 px-10 md:px-20"
    >
      <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold mb-10">
        Educación <span className="text-secondary"></span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-40 items-center">
        {/*<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center"></div>*/}


        {/* Texto */}
        <div className="flex flex-col justify-start gap-4">
          <img
            src={upcLogo}
            alt="UPC logo"
            className="w-16 object-contain opacity-90"
          />

          <p className="text-white font-semibold text-lg">
            Universidad Peruana de Ciencias Aplicadas (UPC)
          </p>

          <p className="text-white/80">
            Ingeniería de Sistemas de Información
          </p>

          <p className="text-white/60 text-sm">
            Agosto 2021 – Presente
          </p>
        </div>

        {/* Cards */}

        {/* Columna 3: Imagen del Mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <img src={university} alt="Foto de yop" className="rounded-xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
