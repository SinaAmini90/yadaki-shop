import ProductList from "../components/ProductList";
import SectionTitle from "../components/SectionTitle";

const Products = () => {
  return (
    <>
      <SectionTitle>
        <span>All</span> Products
      </SectionTitle>

      <ProductList featured={false} />
    </>
  );
};

export default Products;
