import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  margin-left:40%;
  color:teal;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top:15px;
  margin-bottom: 20px;
  border-radius:5px;
  transition: transform .2s;
  &:hover {
		color:white;
		transform: scale(1.1);
	}
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          USER NAME
          <Input placeholder="username" />
          PASSWORD
          <Input placeholder="password" />
          <Button style={{margin:"auto"}}><Link to='/'style={{color:"white",textDecoration: 'none'}}>LOGIN</Link></Button>
          <Divider style={{marginTop:"20px",marginBottom:"10px"}}/>
          <Link to='/' style={{fontWeight:"bold"}}>fogetton password ?</Link>
          <Divider  style={{marginTop:"20px",marginBottom:"10px"}}/>
          <Link to='/Register' style={{fontWeight:"bold"}}>Create NEW Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
