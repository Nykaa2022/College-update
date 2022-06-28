import styled from "styled-components";
import { useState, useEffect } from "react";
import getData from "../pages/data/product_data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  transition : transform .5s;
  &:hover{
    transform: scale(1.020);
    background-color: rgba(266,165,213,0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
  &:hover{
    
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
    background
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: Transparent;
    color:white;
    cursor: pointer;
    font-weight: 600;
    transition : transform .2s;
    border :solid 2px white;
    border-radius:25px;
    &:hover{
      transform: scale(1.1);
      background-color: rgba(266,165,213,0.3);
    }
`;

const MainContent = () => {
  function handleSearch(id) {
      window.location.assign('Product/'+id);
  }
 

  const [sproduct_card, setproduct_card] = useState([
          {
              id: 1,
              product_name: "Rayes Alpha",
              description: "Hands-free, Hads-on Mushc Experience",
              price: 350,
              currency: "₹",
              thumb: "http://localhost:3000/images/1.png"
          },
      ]);

  useEffect(() => {
      getData((res) => {
          console.log(res);
          setproduct_card(res);
       });
    }, []);

    console.log(localStorage.getItem('username'));
    return (
      <div>
    {sproduct_card.map((item) =>

    <Container key={item.id} onClick={handleSearch.bind(this,item.id)}>
      <Image src={item.thumb} />
      <Info>
        <Title>{item.product_name}</Title>
        <Link to='/'><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  )};</div>
    )};


export default MainContent;
