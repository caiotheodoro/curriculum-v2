"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { useRef } from "react";
import { CardCarousel } from "@/app/components/modecules/carousel-card/carousel-card";
import { certifications } from "@/utils/certifications/items";

export function CarouselStack() {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {certifications.map((certification, index) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={certification.name}
          >
            <CardCarousel {...certification} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
