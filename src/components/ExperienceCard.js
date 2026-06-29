import { FaBriefcase } from "react-icons/fa";
export default function ExperienceCard({experience}){ 
  return (
    <div className="relative pl-8 pb-6 border-l border-border last:pb-0">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
      
      <div className="space-y-1">
        <div className="flex items-start gap-2">
          <FaBriefcase className="h-4 w-4 text-primary mt-1" />
          <div className="flex-1">
            <h3 className="font-medium text-base">{experience.title}</h3>
            <p className="text-sm text-muted-foreground">{experience.organization}</p>
            <p className="text-xs text-muted-foreground">{experience.period}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed pt-2">{experience.responsibilities}</p>
      </div>
    </div>
  );
};

