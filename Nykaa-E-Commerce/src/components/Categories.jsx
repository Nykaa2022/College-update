import styled from "styled-components";
import { categories, categories1, categories2, categories3, categories4, categories5 } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};

export const Categories1 = () => {
  return (
    <Container>
      {categories1.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};

export const Categories2 = () => {
  return (
    <Container>
      {categories2.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};

export const Categories3 = () => {
  return (
    <Container>
      {categories3.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};

export const Categories4 = () => {
  return (
    <Container>
      {categories4.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};

export const Categories5 = () => {
  return (
    <Container>
      {categories5.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
  );
};