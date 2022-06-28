import {useState} from "react"
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://images.unsplash.com/photo-1602509380133-c9d7bab97687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: darkgrey ;
  border-radius:15px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  margin-left:40%;
  color: #44107a;
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
  border-radius:15px;
  font-size:15px;
  border:1px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color:#44107a ;
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


export default function Login() {
  
    const [name, setname] = useState("");
    const [pass, setprice] = useState("");
    function handlenme(e) {
        setname(e.target.value);
    }
    function handleprc(e) {
        setprice(e.target.value);
    }
  async function handleSubmit(e) {
        var url = 'http://localhost/project/login.php?name='+name+"&pass="+pass;
        const formData = new FormData();
        formData.append('avatar',"hi")
        await axios.post(url, formData)
        .then(res => {
          if(!res.data.error){
           localStorage.setItem('username', name);
           localStorage.setItem('type', res.data.type);
           window.location ="/";
           alert(res.data.message);
          }else{
           alert(res.data.message);
          }
        })
    }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        
        <Form>
          <b style={{color:"#44107a"}}>USER NAME</b>
          <Input placeholder="username" value={name}
          onChange={handlenme.bind(this)}/>
          <b style={{color:"#44107a"}}>PASSWORD</b>
          <Input placeholder="password"  value={pass}
          onChange={handleprc.bind(this)} />
          <Button style={{margin:"auto"}} onClick={handleSubmit.bind(this)}>LOGIN</Button>
          <Divider style={{marginTop:"20px",marginBottom:"10px"}}/>
          <Link to='/' style={{fontWeight:"500",color:"#44107a"}}>Not now ?</Link>
          <Divider  style={{marginTop:"20px",marginBottom:"10px"}}/>
          <Link to='/Register' style={{fontWeight:"500",color:"#44107a"}}>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

