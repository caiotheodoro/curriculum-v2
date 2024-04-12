import { useTranslations } from "next-intl";
import { FadeIn } from "@/app/components/atoms/fade-in";
import { ShakeAnimation } from "@/app/components/atoms/squeeze";
import { CodeBlock } from "@/app/components/organisms/code-block/code-block";
import { getExperience } from "@/utils/format";
import { CarouselStack } from "@/app/components/organisms/card-carousel/card-carousel";
export default function Home() {
  const t = useTranslations("about");

  const formatObject = () => {
    return `{
  "${t("personal.age.key")}": ${t("personal.age.value")},
  "${t("personal.degree.key")}": "${t("personal.degree.value")}",
  "${t("personal.work_experience.key")}": "${t(
      "personal.work_experience.value",
      getExperience()
    )}",
  "${t("personal.working_at.key")}": "${t("personal.working_at.value")}",
  "${t("personal.hobbies.key")}": "${t("personal.hobbies.value")}"
}`;
  };

  return (
    <FadeIn className="flex lg:gap-12 gap-10 flex-col text-justify">
      <div className="flex gap-2 lg:text-base md:text-sm sm:text-sm text-sm ">
        <ShakeAnimation>👋</ShakeAnimation>
        {t("title")}
      </div>
      <div className="flex gap-3 flex-col">
        <span>{t("description")}</span>
        <span>{t("subdescription")}</span>
      </div>
      <div>
        <CodeBlock title={t("personal.title")} code={formatObject()} />
      </div>
      {t("certificates")}
      <CarouselStack />
    </FadeIn>
  );
}
