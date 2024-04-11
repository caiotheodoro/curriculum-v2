"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { useRef } from "react";
import { ProjectCardCarousel } from "../../molecules/project-card-carousel/project-card-carousel";
import { ProjectCarouselProps } from "@/@types/molecules";

export function ProjectCarousel({
  projects,
  autoplay = true,
  carouselBasis,
  delay = 5000,
}: Readonly<ProjectCarouselProps>) {
  const plugin = useRef(Autoplay({ delay }));

  return (
    <Carousel
      plugins={(autoplay && [plugin.current]) || []}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {projects.map((certification, index) => (
          <CarouselItem className={carouselBasis} key={certification.name}>
            <ProjectCardCarousel {...certification} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
