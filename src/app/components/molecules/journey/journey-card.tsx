import Image from "next/image";
import { MarkdownRenderer } from "@/app/components/molecules/journey/markdown-renderer";
import { JourneyCardProps } from "@/@types/molecules";
export const JourneyCard = ({
  title,
  description,
  image,
  ...props
}: JourneyCardProps) => {
  return (
    <div className="word-break-word flex flex-col gap-1">
      <span className="font-medium tracking-tight font-inter">{title}</span>
      {description && (
        <MarkdownRenderer className="text-sm font-sans" {...props}>
          {description}
        </MarkdownRenderer>
      )}
      {image?.src && (
        <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
          />
        </div>
      )}
    </div>
  );
};
