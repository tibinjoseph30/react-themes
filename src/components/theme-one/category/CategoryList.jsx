import { categoriesData } from "../../../data/theme1/categoriesData";
import Container from "../../../shared/layout/Container";
import Section from "../../../shared/layout/Section";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 lg:grid-cols-6 sm:grid-cols-3 grid-cols-2">
          {categoriesData.map((cat) => (
            <CategoryItem key={cat.id} {...cat} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CategoryList;
