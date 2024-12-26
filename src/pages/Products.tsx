import ProductList from "../components/ProductList";
import SectionTitle from "../components/SectionTitle";

const Products = () => {
  return (
    <>
      <SectionTitle>
        <p>
          <span>All</span> Products
        </p>
      </SectionTitle>

      <ProductList />
    </>
  );
};

export default Products;
