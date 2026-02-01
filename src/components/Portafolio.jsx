import { useState } from "react";
import { FaPlus } from "react-icons/fa"; // icono +
import proyecto1 from "../assets/images/share-portal.jpg";
import proyecto2 from "../assets/images/share-portal.jpg";
import proyecto3 from "../assets/images/share-portal.jpg";
import proyect1 from "../assets/images/proyecto1-capybot-pres.png";
import proyect1_inicio from "../assets/images/proyecto1-capybot-inicio.png";
import proyect1_dos from "../assets/images/proyecto1-capybot-dos.png";
import proyect1_tres from "../assets/images/proyecto1-capybot-tres.png";
import proyect2_pres from "../assets/images/proyecto2_press.png";
import proyect3_pres from "../assets/images/proyecto3_CientificoL.png";
import proyect3_inicio from "../assets/images/proyecto3_CientificoL_inicio.png"

export default function Portfolio() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [zoomIndex, setZoomIndex] = useState(0); // índice imagen principal
    const [zoomImage, setZoomImage] = useState(null); // fullscreen zoom

    const proyectos = [
        {
            id: 1,
            title: "CapyBot: ChatBot Web Inteligente con LLM",
            description:
                "Chatbot interactivo capaz de responder consultas frecuentes y brindar asistencia en tiempo real, implementado con procesamiento de lenguaje natural. Permite integraciones con web y aplicaciones móviles, mejorando la experiencia del usuario.",
            images: [proyect1, proyect1_inicio, proyect1_dos, proyect1_tres],
            tech: ["Python / Node.js", "NLP", "JavaScript", "HTML", "CSS", "OLLAMA"],
            github: "https://github.com/tu-github/proyecto-web",
            demo: "#",
        },
        {
            id: 2,
            title: "Landing Page en HubSpot CKUDE",
            description: "Diseño y maquetación de una landing page optimizada para conversión de leads. Implementé formularios, secciones interactivas y elementos visuales siguiendo la identidad de la marca, además de integrar automatizaciones con HubSpot CRM.",
            images: [proyect2_pres, proyecto1, proyecto3],
            tech: ["HubSpot", "HTML/CSS", "UX/UI Design", "Marketing Digital", "CRM"],
            github: "https://github.com/tu-github/proyecto-backend",
            demo: "https://50137581.hs-sites.com/ckude-landingpage",
        },
        {
            id: 3,
            title: "JumanjiCov Edition",
            description: "Proyecto universitario desarrollado en C++ como parte de la asignatura de programación 2. El juego simula una aventura inspirada en Jumanji, implementando mecánicas de exploración, enemigos basado en el contexto de la pandemia",
            images: [proyect3_pres, proyect3_inicio, proyecto2],
            tech: ["C++", "POO", "OpenCV", "Logica de juego y coliciones"],
            github: "https://github.com/tu-github/proyecto-ia",
            demo: "#",
        },

        {
            id: 4,
            title: "YouConfort",
            description: "Proyecto universitario desarrollado en Java, JS,",
            images: [proyect3_pres, proyecto1, proyecto2],
            tech: ["C++", "POO", "OpenCV", "Logica de juego y coliciones"],
            github: "https://github.com/correak/YCv2.git",
            demo: "#",
        },

        {
            id: 5,
            title: "JumanjiCov Edition",
            description: "Proyecto universitario desarrollado en C++ como parte de la asignatura de programación 2. El juego simula una aventura inspirada en Jumanji, implementando mecánicas de exploración, enemigos basado en el contexto de la pandemia",
            images: [proyect3_pres, proyecto1, proyecto2],
            tech: ["C++", "POO", "OpenCV", "Logica de juego y coliciones"],
            github: "https://github.com/tu-github/proyecto-ia",
            demo: "#",
        },

    
        {
            id: 6,
            title: "JumanjiCov Edition",
            description: "Proyecto universitario desarrollado en C++ como parte de la asignatura de programación 2. El juego simula una aventura inspirada en Jumanji, implementando mecánicas de exploración, enemigos basado en el contexto de la pandemia",
            images: [proyect3_pres, proyecto1, proyecto2],
            tech: ["C++", "POO", "OpenCV", "Logica de juego y coliciones"],
            github: "https://github.com/tu-github/proyecto-ia",
            demo: "#",
        },

        
    ];

    const openProjectModal = (project, index = 0) => {
        setSelectedProject(project);
        setOpenModal(true);
        setZoomIndex(index);
    };

    const closeModal = () => {
        setOpenModal(false);
        setSelectedProject(null);
        setZoomIndex(0);
        setZoomImage(null);
    };

    const nextImage = () => {
        const next = (zoomIndex + 1) % selectedProject.images.length;
        setZoomIndex(next);
    };

    const prevImage = () => {
        const prev = (zoomIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
        setZoomIndex(prev);
    };

    return (
        <section className="w-full min-h-screen bg-dark text-white py-40 px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Mi Portafolio
            </h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={proyecto.images[0]}
                            alt={proyecto.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Icono + */}
                        <button
                            onClick={() => openProjectModal(proyecto)}
                            className="absolute top-2 right-2 bg-purple-600/80 hover:bg-purple-500 text-white p-2 rounded-full text-lg shadow-md transition"
                        >
                            <FaPlus />
                        </button>

                        <div className="p-5 flex flex-col gap-3">
                            <h3 className="text-xl font-semibold">{proyecto.title}</h3>
                            <p className="text-gray-300 text-sm">{proyecto.description}</p>
                            <div className="flex gap-4 mt-2 flex-wrap">
                                <a
                                    href={proyecto.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-gradient-to-r from-[#4d00ff] to-[#f000ff] text-black font-bold rounded-full text-sm text-center hover:shadow-lg transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={proyecto.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 border border-white text-white font-bold rounded-full text-sm text-center hover:bg-white hover:text-black transition"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {openModal && selectedProject && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl max-w-2xl w-full relative flex flex-col items-center">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-xl font-bold hover:text-secondary"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold mb-4 text-center">{selectedProject.title}</h3>
                        <p className="mb-4 text-center">{selectedProject.description}</p>

                        {/* Imagen principal */}
                        <div className="relative w-full flex items-center justify-center mb-4">
                            <button
                                onClick={prevImage}
                                className="absolute left-0 text-white text-3xl font-bold px-4 py-2 bg-black/50 rounded-r-md hover:bg-black/70"
                            >
                                ‹
                            </button>

                            <img
                                src={selectedProject.images[zoomIndex]}
                                alt="Imagen principal"
                                className="max-h-[60vh] object-contain rounded-md shadow-2xl mx-4 cursor-zoom-in"
                                onClick={() => setZoomImage(selectedProject.images[zoomIndex])}
                            />

                            <button
                                onClick={nextImage}
                                className="absolute right-0 text-white text-3xl font-bold px-4 py-2 bg-black/50 rounded-l-md hover:bg-black/70"
                            >
                                ›
                            </button>
                        </div>

                        {/* Miniaturas */}
                        <div className="flex gap-2 overflow-x-auto mb-4">
                            {selectedProject.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`miniatura ${i + 1}`}
                                    className={`h-16 w-16 object-cover rounded-md cursor-pointer border-2 ${i === zoomIndex ? "border-purple-500" : "border-transparent"
                                        }`}
                                    onClick={() => setZoomIndex(i)}
                                />
                            ))}
                        </div>

                        {/* Tecnologías */}
                        <p className="mb-4 text-sm text-gray-400 text-center">
                            Tecnologías: {selectedProject.tech.join(", ")}
                        </p>

                        {/* Botones */}
                        <div className="flex gap-4">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-gradient-to-r from-[#4d00ff] to-[#f000ff] text-black font-bold rounded-full text-sm text-center hover:shadow-lg transition"
                            >
                                GitHub
                            </a>
                            <a
                                href={selectedProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 border border-white text-white font-bold rounded-full text-sm text-center hover:bg-white hover:text-black transition"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Zoom fullscreen */}
            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
                    onClick={() => setZoomImage(null)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const prev = (zoomIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
                            setZoomIndex(prev);
                            setZoomImage(selectedProject.images[prev]);
                        }}
                        className="absolute left-5 text-white text-3xl font-bold"
                    >
                        ‹
                    </button>

                    <img
                        src={zoomImage}
                        alt="Zoom"
                        className="max-h-[90%] max-w-[90%] object-contain rounded-md shadow-2xl"
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const next = (zoomIndex + 1) % selectedProject.images.length;
                            setZoomIndex(next);
                            setZoomImage(selectedProject.images[next]);
                        }}
                        className="absolute right-5 text-white text-3xl font-bold"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
}
