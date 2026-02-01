import {
    FaNodeJs, FaPhp, FaDatabase, FaReact, FaPython, FaGitAlt, FaHtml5, FaAngular, FaJs, FaJava
} from "react-icons/fa";
import {
    SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiTensorflow, SiNextdotjs, SiFirebase, SiCplusplus, SiDotnet, SiOpencv, SiHuggingface

} from "react-icons/si";



export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full bg-[#000] text-white py-24 px-6 md:px-12"
        >
            
            <div className="max-w-7xl mx-auto">

                {/* TÍTULO */}
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    My <span className="text-secondary">Skills</span>
                </h2>

                {/* GRID DE CARDS */}
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Backend */}
                    <div className="relative bg-gray-900 p-8 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                        
                        <h3 className="text-xl font-bold mb-6 text-secondary">Backend & APIs</h3>
                        <ul className="space-y-4">
                            <Skill icon={<FaNodeJs className="text-green-400" />} text="Node.js & Express" />
                            <Skill icon={<FaPhp className="text-indigo-400" />} text="PHP (Laravel / MVC)" />
                            <Skill icon={<FaPython className="text-yellow-400" />} text="Python (APIs & IA)" />
                            <Skill icon={<FaDatabase className="text-gray-300" />} text="RESTful APIs" />
                            <Skill icon={<SiNextdotjs className="text-white" />} text="Next.js" />
                            <Skill icon={<FaJava className="text-red-400" />} text="Java" />
                            <Skill icon={<SiCplusplus className="text-blue-400" />} text="C++" />
                            <Skill icon={<SiDotnet className="text-purple-400" />} text=".NET C#" />



                        </ul>
                    </div>

                    {/* Frontend */}
                     <div className="relative bg-gray-900 p-8 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-6 text-secondary">Frontend</h3>
                        <ul className="space-y-4">
                            <Skill icon={<FaReact className="text-cyan-400" />} text="React" />
                            <Skill icon={<SiTailwindcss className="text-sky-400" />} text="Tailwind CSS" />
                            <Skill icon={<FaHtml5 className="text-sky-400" />} text="HTML" />
                            <Skill icon={<FaAngular className="text-red-400" />} text="Angular" />
                            <Skill icon={<FaJs className="text-yellow-300" />} text="JavaScript" />

                        </ul>
                    </div>

                    {/* Data & IA */}
                     <div className="relative bg-gray-900 p-8 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-6 text-secondary">Data & IA</h3>
                        <ul className="space-y-4">
                            <Skill icon={<SiTensorflow className="text-orange-400" />} text="Machine Learning" />
                            <Skill icon={<SiOpencv className="text-green-400" />} text="OpenCV (Visión Artificial)" />
                            <Skill icon={<SiHuggingface className="text-orange-300" />} text="NLP (Procesamiento de Lenguaje Natural)" />
                            <Skill icon={<SiMongodb className="text-green-500" />} text="MongoDB" />
                            <Skill icon={<SiPostgresql className="text-blue-400" />} text="PostgreSQL" />
                            <Skill icon={<SiMysql className="text-blue-300" />} text="MySQL" />
                            <Skill icon={<SiFirebase className="text-yellow-400" />} text="Firebase" />

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Skill */
function Skill({ icon, text }) {
    return (
        <li className="flex items-center gap-4 text-gray-300 hover:text-white transition group">
            <span className="text-2xl group-hover:scale-110 transition">
                {icon}
            </span>
            <span>{text}</span>
        </li>
    );
}
