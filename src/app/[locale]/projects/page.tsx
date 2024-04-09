import { useTranslations } from "next-intl";
export default function Projects() {
  const t = useTranslations("projects");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
