import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { Github, Key, Mail } from "lucide-react";

export default function Home() {

  const projects = [
    { title: "DugnadNett", desc: "Bacheloroppgave", image: "./plant-garden.svg" },
    { title: "MinePay", desc: "Donation Store Platform", image: "./payment-methods.svg" }
  ]

  return (
    <div>
      <div className="hero h-[400px] flex justify-center items-center flex-col">
        <h1 className="font-medium">Hei,</h1>
        <div>
          <p className="font-medium text-xl">Trenger du utvikler?</p>
        </div>
        <div className="p-4 flex gap-4 px-4 mt-5 outline shadow-md rounded-md bg-white outline-1">
          <img src="./USN-symbol_lilla.svg" alt="" className="w-14" />
          <div>
            <h4 className="font-medium">Bachelor i IT og Informasjonsystemer</h4>
            <p>aug. 2020 - juni. 2024</p>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] m-auto p-4">
        <h3 className="text-lg font-medium">Prosjekter</h3>
        <div className="grid grid-cols-1 w-full gap-x-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard title={project.title} desc={project.desc} image={project.image} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex items-end justify-center p-4 gap-2 absolute left-0 right-0 m-auto bottom-5">
        <Link href="https://github.com/Zekima">
          <Github className="text-gray-400 hover:text-gray-800 cursor-pointer" size={24} />
        </Link>
        <a href="mailto:christianledaal@gmail.com">
          <Mail className="text-gray-400 hover:text-gray-800 cursor-pointer" size={24} />
        </a>
      </div>
    </div>
  );
}
