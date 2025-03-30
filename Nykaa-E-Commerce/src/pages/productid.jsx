
import React, { useState, useEffect } from 'react';
import getDataa from "./data/product_id_data";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import axios from 'axios';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PositionedSnackbar from "../components/Alert";
import { ArrowBack } from "@mui/icons-material";
import Commentsbox from '../components/Comments';
import Rating from "../components/Rating"
import FullComment from '../components/Fullcomments';
import Announcement from '../components/Announcement';
import { Add, Remove } from "@mui/icons-material";

import {
    makeStyles,
    createTheme,
    ThemeProvider
  } from "@mui/styles";
  import Container from "@mui/material/Container";
  import Typography from "@mui/material/Typography";  
  import Comments from "./Comments";
  import { CssBaseline, Grid } from "@mui/material";

  const ProContainer = styled.div``;

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
  const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  color: teal;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const ProductID = () => {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [ldesc, setldesc] = useState("");
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }

    function handlealert(){
      alert("Please Login to Comment");
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const [sproduct_card, setproduct_card] = useState([
      {
          id: 1,
          product_name: "Rayes Alpha",
          description: "Hands-free, Hads-on Mushc Experience",
          price: 350,
          currency: "$",
          thumb: "http://localhost:3000/images/1.png"
      },
    ]);
    const params = useParams();
    var id = params.id;

    console.log(id);

    useEffect(() => {
      var id = params.id;
      getDataa(id,(res) => {
          console.log(res);
          setproduct_card(res);
       });
    }, []);

    function handlelds(e) {
      setldesc(e.target.value);
  }

    function handleSubmit(e) {
      alert(localStorage.getItem("username"));
      // var id = params.id;
      // var url = 'http://localhost/project/addcomment.php?name='+ldesc+"&pid="+id;
      // const formData = new FormData();
      // formData.append('avatar',"hi")
      // axios.post(url, formData)
      // .then(res => {
      //    if(!res.data.error){
      //     setldesc("");
      //     alert(res.data.message);
      //    }else{
      //     alert(res.data.message);
      //    }
      // })
  }
  var i = 1;
  const ProAdd = () =>{
    if(i<=i){
      i++;
    }
  }


    //console.log(sproduct_card);
    
    const listItems = sproduct_card.map((item) =>
    <ProContainer>
      <Announcement /> 
    <Wrapper className="details" key={item._id}>
      <Link to='/' ><ArrowBack></ArrowBack></Link>
    <ImgContainer className="big-img">
      <Image src={item.thumb} alt=""/>
    </ImgContainer>

    <InfoContainer className="box">
      
        <Title>{item.product_name}</Title>
        <Price>₹{item.price}</Price>
      

      <Desc>{item.description}</Desc>
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
              <Amount>{i}</Amount>
              <Add onClick={ProAdd(this)}  />
            </AmountContainer> 
            <PositionedSnackbar/>
          </AddContainer>
  
  
 <Button >Buy Now</Button>
    </InfoContainer>
    
  </Wrapper>
<Rating id={id} />
  <Commentsbox id={id} /> 
  <FullComment />
</ProContainer>
    );

    var result = sproduct_card.filter(function (o1) {
            return o1.id === 2;
    });
    
    console.log(result);
    return (
        <center>
        <div className='Comment-section'>
        <NavBar />
        
        <div className="main_content">
        <center>
            {listItems}<br />
            </center>
            <div>
        <textarea
        placeholder="Tell us, What's your experience about this product?"
        style={styles.textarea}
        onChange={handlelds.bind(this)}
        value={ldesc}
        
      />
<br/>
                
                
                 <Button
                 style={styles.button}
                 onClick={handleSubmit.bind(this)}
               >
                 Submit
               </Button>
     
      </div>
        </div>
        <Footer />
        </div></center>
    )
}

const styles = {
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 900
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  };
  

export default ProductID;
