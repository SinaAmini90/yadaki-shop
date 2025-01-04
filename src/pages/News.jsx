import ArticlesList from "../components/ArticlesList";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
export default function News() {
  const [t] = useTranslation();
  return (
    <>
      <SectionTitle lang="en">
        {t("articles")} <span>{t("list")}</span>
      </SectionTitle>
      <ArticlesList />
    </>
  );
}
