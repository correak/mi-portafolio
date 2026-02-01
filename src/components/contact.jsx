import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bg from "../assets/images/yop_i.jpg";

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-dark text-white py-24 px-6 md:px-12">


            <div className="max-w-7xl mx-auto">

                <div className="max-w-5xl mx-auto text-center">

                    {/* TÍTULO */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Contáctame
                    </h2>

                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        ¿Buscas una desarrolladora en Web, Backend o IA?
                        Estoy disponible para prácticas, proyectos y oportunidades profesionales.
                    </p>

                    {/* ICONOS */}
                    <div className="flex justify-center gap-6 text-3xl">

                        {[{
                            icon: <SiGmail />,
                            href: "Gmail:karendelpilar.correa@gmail.com",
                            label: "Gmail"
                        }, {
                            icon: <FaLinkedin />,
                            href: "https://www.linkedin.com/in/karen-cor217/",
                            label: "LinkedIn"
                        }, {
                            icon: <FaGithub />,
                            href: "https://github.com/correak",
                            label: "GitHub"
                        }, {
                            icon: <FaInstagram />,
                            href: "https://www.instagram.com/2103_correa.k4/",
                            label: "Instagram"
                        }].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="text-white border-2 border-white rounded-full p-3 hover:scale-125 transition"
                            >
                                {item.icon}
                            </a>
                        ))}

                    </div>


                </div>
            </div>

        </section>
    );
}
