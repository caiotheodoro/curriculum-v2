import Hydrate from "@/utils/query/hydrate-client";
import { dehydrate } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { createSSRHelper } from "@/app/api/trpc/trpc-router";
import { FadeIn } from "@/app/components/atoms/fade-in";
import { ShakeAnimation } from "@/app/components/atoms/squeeze";
export default function Home() {
  const t = useTranslations("about");
  const helpers = createSSRHelper();

  console.log(t);
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <FadeIn>
        <div className="flex gap-2">
          <ShakeAnimation>👋</ShakeAnimation>
          {t("title")}
        </div>
      </FadeIn>
    </Hydrate>
  );
}
