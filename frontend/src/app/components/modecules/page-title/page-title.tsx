import { cn } from "@/lib/utils";

export const PageTitle = ({
  title,
  subtitle,
  className,
  ...rest
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mb-6", className)} {...rest}>
      {title}
    </div>
  );
};
