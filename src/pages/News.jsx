import ArticlesList from "../components/ArticlesList";
import SectionTitle from "../components/SectionTitle";
export default function News() {
  return (
    <>
      <SectionTitle>
        <span>latest</span> Articles
      </SectionTitle>
      <ArticlesList />
    </>
  );
}
