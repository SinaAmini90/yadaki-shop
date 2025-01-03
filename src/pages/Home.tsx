import "./Home.css";
import ProductList from "../components/ProductList";
import ArticlesSlick from "../components/ArticlesSlick";
import CategoryProduct from "../components/CategoryProduct";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation();
  const currentLang = i18n.language;
  return (
    <>
      <Hero />
      <SectionTitle lang="en">
        <p> {t("products")} </p>
        <span>{t("category")}</span>
      </SectionTitle>
      <CategoryProduct />

      <SectionTitle lang="en">
        <span>{t("featured")}</span> {t("products")}
      </SectionTitle>
      <ProductList featured />

      <SectionTitle lang={currentLang}>
        {t("last")}
        <span> {t("articles")}</span>
      </SectionTitle>
      <ArticlesSlick />
    </>
  );
};

export default Home;
