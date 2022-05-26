import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover{
    font-weight:bold;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NYKAA.</Logo>
        <Desc>
         Fashion is a source of looking better/attractive.
         |
         Sail into the sea Of fashion.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Link to='/Facebook'  style={{textDecoration:'none',color:"white"}}><Facebook /></Link>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="2a4b78">
          <Link to='/GitHup'  style={{textDecoration:'none',color:"white"}}><GitHub/></Link>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Home</Link></ListItem>
          <ListItem><Link to='/Cart' style={{textDecoration:'none',color:"black"}}>Cart</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Man Fashion</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Woman Fashion</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Accessories</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>My Account</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Order Tracking</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Wishlist</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Wishlist</Link></ListItem>
          <ListItem><Link to='/' style={{textDecoration:'none',color:"black"}}>Terms</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"5px", color:"darkred"}}/> Nykaa W/M Fashion  , South Sunshine Bay 600075
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px",color:"steelblue"}}/> +91 987 654 3210
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px",color:"goldenrod"}} /> Nykaafashioncare@Gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
