import "./Home.css";
import ProductList from "../components/ProductList";
import Articles from "../components/Articles";
import CategoryProduct from "../components/CategoryProduct";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <>
      <Hero />

      <SectionTitle>
        product <span>category</span>
      </SectionTitle>
      <CategoryProduct />

      <SectionTitle>
        <span>Featured</span> Products
      </SectionTitle>
      <ProductList featured />

      <SectionTitle>
        Last<span> Articles</span>
      </SectionTitle>
      <Articles />
    </>
  );
};

export default Home;
