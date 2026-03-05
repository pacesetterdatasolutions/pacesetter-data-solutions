import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  href?: string;
  compact?: boolean;
}

const ServiceCard = ({ icon, title, description, href, compact = false }: ServiceCardProps) => {
  const content = (
    <div
      className={`group surface-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 cursor-pointer ${
        compact ? "text-center" : ""
      }`}
    >
      <div className={`text-primary mb-3 transition-transform duration-300 group-hover:scale-110 ${compact ? "flex justify-center" : ""}`}>
        {icon}
      </div>
      <h3 className={`font-semibold mb-1 ${compact ? "text-sm" : "text-lg"}`}>{title}</h3>
      {description && <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{description}</p>}
      {href && (
        <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 transition-all duration-200 group-hover:gap-2">
          Learn more <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
};

export default ServiceCard;
