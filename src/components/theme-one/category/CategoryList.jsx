import { categoriesData } from "../../../data/theme1/categoriesData";
import Container from "../layout/Container";
import Section from "../layout/Section";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-6">
          {categoriesData.map((cat) => (
            <CategoryItem key={cat.id} {...cat} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CategoryList;
