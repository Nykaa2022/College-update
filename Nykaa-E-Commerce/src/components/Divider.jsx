import styled from "styled-components";
import { divider,divider2,divider3,divider4 } from "../data";
import { mobile } from "../responsive";
import DividerItem from "../components/DividerItem";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

export const Divide1=()=> {
  return (
    <Container>
      {divider.map((item) => (
        <DividerItem item={item} key={item.id=1} />
      ))}
    </Container>
    
  );
};
export const Divide2=()=> {
  return (
    <Container>
      {divider2.map((item) => (
        <DividerItem item={item} key={item.id=1} />
      ))}
    </Container>
    
  );
};
export const Divide3=()=> {
  return (
    <Container>
      {divider3.map((item) => (
        <DividerItem item={item} key={item.id=1} />
      ))}
    </Container>
    
  );
};
export const Divide4=()=> {
  return (
    <Container>
      {divider4.map((item) => (
        <DividerItem item={item} key={item.id=1} />
      ))}
    </Container>
    
  );
};



