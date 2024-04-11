import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import { CertificateProps } from "@/@types/molecules";
import Link from "next/link";

export const CardCarousel = ({
  name,
  issuedDate,
  link,
  src,
}: CertificateProps) => {
  return (
    <Card className="hover:border-sky-600 transition-colors duration-500 cursor-pointer min-h-[100px]">
      <Link href={link} target="_blank">
        <CardContent className="p-6 flex items-center justify-center gap-3">
          <Image
            alt="Certificate"
            className="rounded-md object-cover"
            height="65"
            src={src}
            style={{
              aspectRatio: "200/150",
              objectFit: "cover",
            }}
            width="65"
          />
          <div className="grid gap-2">
            <h3 className="text-xs font-semibold font-inter text-left">
              {name}
            </h3>

            <p className="text-xs font-medium leading-none text-gray-500">
              {issuedDate}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
