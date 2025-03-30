import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PositionedSnackbar from "../components/Alert";
import { ArrowBack } from "@mui/icons-material";
import Rating from "../components/Rating"
import Comments from "../components/Comments"
import FullComment from "../components/Fullcomments"
import Comments from "../components/Comments";
import React, { useState, useEffect } from 'react';
import getDataa from "./data/product_id_data";
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  color:;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

/*const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`; */

const Product = ()=>{

  
    // const [sproduct_card, setproduct_card] = useState([
    //   {
    //       id: 1,
    //       product_name: "Rayes Alpha",
    //       description: "Hands-free, Hads-on Mushc Experience",
    //       price: 350,
    //       currency: "$",
    //       thumb: "http://localhost:3000/images/1.png"
    //   },
    // ]);
    const params = useParams();
    var id = params.id;

    console.log(id);
   
    // useEffect(() => {
    //   var id = params.id;
    //   getDataa(id,(res) => {
    //       console.log(res);
    //       setproduct_card(res);
    //    });
    // }, []);
  
  //   function handlelds(e) {
  //     setldesc(e.target.value);
  // }
  
  //   function handleSubmit(e) {
  //     var id = params.id;
  //     var url = 'http://localhost/project/addcomment.php?name='+ldesc+"&pid="+id;
  //     const formData = new FormData();
  //     formData.append('avatar',"hi")
  //     axios.post(url, formData)
  //     .then(res => {
  //        if(!res.data.error){
  //         setldesc("");
  //         alert(res.data.message);
  //        }else{
  //         alert(res.data.message);
  //        }
  //     })
  // }
//   const listItems = sproduct_card.map((item) =>
//   <div className="details" key={item._id}>
//   <div className="big-img">
//     <img src={item.thumb} alt=""/>
//   </div>

//   <div className="box">
//     <div className="row">
//       <h2>{item.product_name}</h2>
//       <span>${item.price}</span>
//     </div>

//     <p>{item.description}</p>

//     <button className="cart">Add to cart</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     <button className="cart">Buy Now</button>

//   </div>
// </div>

//   );
return (
    <Container>
      <Navbar />
      <Announcement />
      <Link to='/' style={{marginLeft:"5%"}}><ArrowBack></ArrowBack></Link>
      
      <Wrapper  >     
        <ImgContainer>
          <Image src="" alt="no img" />
        </ImgContainer>
        <InfoContainer>
          <Title>asada</Title>
          <Desc>
          dbaskasnak
          </Desc>
          <Price>₹ 500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="red" />
              <FilterColor color="darkviolet" />
              <FilterColor color="gold" />
              <FilterColor color="Yellow" />
            </Filter>
            <Filter>
              <FilterTitle>Saree Length</FilterTitle>
              <FilterSize>
                <FilterSizeOption>6.3 m (with blouse piece)</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer> 
            <PositionedSnackbar/>
          </AddContainer>
        </InfoContainer> 
      </Wrapper>
      <Rating />
      <Comments />
      <FullComment />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product();
