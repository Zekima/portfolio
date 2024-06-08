interface ProjectCardProps {
	image: string,
	title: string,
	desc: string,
}

export function ProjectCard({image, title, desc}: ProjectCardProps) {
	return (
        <div className="p-4 mt-4 flex w-full gap-4 outline shadow-md rounded-md outline-1 hover:shadow-lg cursor-pointer">
          <img src={image} alt="" className="w-14 h-12" />
          <div>
            <h4 className="font-medium">{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
	);
}
