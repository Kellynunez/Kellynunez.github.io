import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function ResumeItem({ icon: Icon, children, className = "" }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-lg bg-gray-800">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <p className={`w-full font-normal ${className}`}>
        {children}
      </p>
    </div>
  );
}

export default ResumeItem;
