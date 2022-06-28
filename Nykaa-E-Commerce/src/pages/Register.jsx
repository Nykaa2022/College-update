import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(70, 70, 70, 0.5),
      rgba(70, 70, 70, 0.5)
    ),
    url("https://images.unsplash.com/photo-1619286188088-de820bdc1230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: darkgrey;
  
  border-radius:15px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border:1px;
  border-radius:5px;
  background: whitesmoke;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border:1px;
border-radius:5px;
background: whitesmoke;
`;

const Option = styled.option`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border:1px;
  border-radius:5px;
  background: whitesmoke;
`;

export default function Signup() {
  
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [type, setype] = useState("1");
  const [phone, setphone] = useState("");
  function handlenme(e) {
      setname(e.target.value);
  }
  function handleprc(e) {
      setpass(e.target.value);
  }
  function handleph(e) {
      setphone(e.target.value);
  }
  function handletp(e) {
      setype(e.target.value);
  }
async function handleSubmit(e) {
      var url = 'http://localhost/project/adduser.php?name='+name+"&pass="+pass+"&type="+type+"&phone="+phone;
      const formData = new FormData();
      formData.append('avatar',"hi")
      await axios.post(url, formData)
      .then(res => {
        if(!res.data.error){
         window.location ="/login";
         alert(res.data.message);
        }else{
         alert(res.data.message);
        }
      })
  }


  return (
    <Container>
      
      <Wrapper>
        <Link to="/" style={{color:"black"}}><ArrowBack /></Link> 
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username" value={name}
          onChange={handlenme.bind(this)}/>
          <Input placeholder="password" value={pass}
          onChange={handleprc.bind(this)}/>
          <Input placeholder="e-mail" />
          <Input placeholder="country" />
          <Input placeholder="pincode" />
          <Input placeholder="contact number" value={phone}
          onChange={handleph.bind(this)}/>
          
          <Select
          onChange={handletp.bind(this)}
          name="type"
        >
            <Option value="1">Customer</Option>
            <Option value="0">Seller</Option>
        </Select>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit.bind(this)}>CREATE</Button>
        </Form>
        <Divider style={{marginTop:"15px"}} />
        <Link to='/Login' style={{fontWeight:"bold",color:"black"}}>already have an account ?</Link>
      </Wrapper>
      
    </Container>
  );
};

