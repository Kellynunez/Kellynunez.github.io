import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  className?: string;
}

export function ProjectCard({ img, title, desc, className = "" }: ProjectCardProps) {
  return (
    <div className={`bg-transparent ${className}`}>
      <div className="mx-0 mt-0 mb-6 h-48 overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-semibold">
            {title}
          </h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">
          {desc}
        </p>
        <button 
          className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          ver detalles
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
