import ProductList from "../components/ProductList";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
const Products = () => {
  const [t] = useTranslation();
  return (
    <>
      <SectionTitle lang="en">
        {t("products")} <span>{t("list")}</span>
      </SectionTitle>

      <ProductList featured={false} />
    </>
  );
};

export default Products;
