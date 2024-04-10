import Hydrate from "@/utils/query/hydrate-client";
import { dehydrate } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { createSSRHelper } from "@/app/api/trpc/trpc-router";
import { FadeIn } from "@/app/components/atoms/fade-in";
import { ShakeAnimation } from "@/app/components/atoms/squeeze";
import { MarkdownRenderer } from "@/app/components/molecules/journey/markdown-renderer";
import { CodeBlock } from "@/app/components/organisms/code-block/code-block";
import { getExperience } from "@/utils/format";
import { CarouselStack } from "@/app/components/organisms/card-carousel/card-carousel";
export default function Home() {
  const t = useTranslations("about");
  const helpers = createSSRHelper();

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
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <FadeIn className="flex lg:gap-12 gap-10 flex-col text-justify">
        <div className="flex gap-2 lg:text-base md:text-sm sm:text-sm text-sm ">
          <ShakeAnimation>👋</ShakeAnimation>
          {t("title")}
        </div>
        <MarkdownRenderer>
          {t.markup("description", {
            span: (chunks) =>
              `<span className="lg:text-base md:text-sm sm:text-sm text-sm ">${chunks}</span>`,
          })}
        </MarkdownRenderer>
        <div>
          <CodeBlock title={t("personal.title")} code={formatObject()} />
        </div>
        {t("certificates")}
        <CarouselStack />
      </FadeIn>
    </Hydrate>
  );
}
