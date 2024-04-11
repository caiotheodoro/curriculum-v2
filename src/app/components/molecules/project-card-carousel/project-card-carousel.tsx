import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import { ProjectProps } from "@/@types/molecules";
import Link from "next/link";

export const ProjectCardCarousel = ({
  name,
  description,
  link,
  src,
}: ProjectProps) => {
  return (
    <Link href={link} target="_blank">
      <Card className="hover:border-sky-600 transition-colors duration-500 cursor-pointer min-h-[180px]  h-full">
        <CardContent className="p-4 flex items-center justify-center gap-3 flex-col w-100 h-full">
          <div className="flex gap-3 w-full items-center h-1/2">
            {src && (
              <Image
                alt="Project logo"
                className="rounded-md object-cover"
                height="60"
                src={src}
                width="50"
              />
            )}

            <h3 className="text-xl font-semibold font-inter text-left">
              {name}
            </h3>
          </div>
          <div className="gap-2  h-1/2">
            <p className="text-sm leading-[1.125rem] font-base  font-inter text-justify">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
