import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import {Link} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`

  padding: 50px;
  margin-right:100%;
`;

const Title = styled.h1`

width: 100%;
font-size: 90px;
font-weight:900;
color: transparent;
background-image: linear-gradient(to right ,#553c9a, #ee4b2b, #cc3f54, #ff7f50, #553c9a);
-webkit-background-clip: text;
background-clip: text;    
background-size: 200%;
background-position: -200%;
animation: animated-gradient 5s infinite alternate-reverse;      
}
@keyframes animated-gradient{
to{
  background-position: 200%;
}
}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  color:#dc4767;
  text-shadow:  
  1px 2px 0px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  font-weight:400;
  font-size: 16px;
  margin-left:50px;
  border:none;
  letter-spacing: 1px;
  transition:.1s;
  color:crimson;
  padding: 13px 20px 13px;
  transition: transform .2s;
  font-size: 46pt;
  font-family: 'Luckiest Guy';

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow:   0px -6px 0 #212121,  
                 0px -6px 0 #212121,
                 0px  6px 0 #212121,
                 0px  6px 0 #212121,
                -6px  0px 0 #212121,  
                 6px  0px 0 #212121,
                -6px  0px 0 #212121,
                 6px  0px 0 #212121,
                -6px -6px 0 #212121,  
                 6px -6px 0 #212121,
                -6px  6px 0 #212121,
                 6px  6px 0 #212121,
                -6px  18px 0 #212121,
                 0px  18px 0 #212121,
                 6px  18px 0 #212121,
                 0 19px 1px rgba(0,0,0,.1),
                 0 0 6px rgba(0,0,0,.1),
                 0 6px 3px rgba(0,0,0,.3),
                 0 12px 6px rgba(0,0,0,.2),
                 0 18px 18px rgba(0,0,0,.25),
                 0 24px 24px rgba(0,0,0,.2),
                 0 36px 36px rgba(0,0,0,.15);
  &:hover{
    transform :scale(1.1)
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to='/products/:id'><Button>SHOW NOW</Button></Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
