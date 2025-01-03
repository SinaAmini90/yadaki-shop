import ProductList from "../components/ProductList";
import SectionTitle from "../components/SectionTitle";

const Products = () => {
  return (
    <>
      <SectionTitle lang="fa">
        <span>All</span> Products
      </SectionTitle>

      <ProductList featured={false} />
    </>
  );
};

export default Products;
