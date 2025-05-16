import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function SkillCard({ icon: Icon, title, children, className = "" }: SkillCardProps) {
  return (
    <div className="bg-transparent">
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 className={`mb-2 text-xl font-semibold ${className}`}>
          {title}
        </h5>
        <p className={`px-8 font-normal ${className} opacity-80`}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
