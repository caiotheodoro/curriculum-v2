import { ProjectCarousel } from "@/app/components/organisms/project-card-carousel/project-card-carousel";
import {
  notebooksEn,
  notebooksPt,
  projectsEn,
  projectsPt,
} from "@/utils/projects/items";
import { useTranslations, useLocale } from "next-intl";
export default function Projects() {
  const t = useTranslations("projects");

  const projects = useLocale() === "en" ? projectsEn : projectsPt;
  const notebooks = useLocale() === "en" ? notebooksEn : notebooksPt;

  return (
    <div className="flex flex-col gap-7">
      <h1>{t("opensource")}</h1>
      <ProjectCarousel
        projects={projects}
        autoplay={false}
        carouselBasis="md:basis-1/2 lg:basis-1/2"
      />
      <h1>{t("notebooks")}</h1>
      <ProjectCarousel
        autoplay
        projects={notebooks}
        carouselBasis="md:basis-1/2 lg:basis-1/3"
        delay={3000}
      />
    </div>
  );
}
