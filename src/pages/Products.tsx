import ProductList from "../components/ProductList";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
const Products = () => {
  const [t] = useTranslation();
  return (
    <>
      <SectionTitle lang="fa">
        <span>{t("list")}</span> {t("products")}
      </SectionTitle>

      <ProductList featured={false} />
    </>
  );
};

export default Products;
