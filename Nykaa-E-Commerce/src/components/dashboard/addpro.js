import React, { useState } from 'react';
import Footer from "../Footer";
import Navbar from "../Navbar";
import axios from 'axios';
import styled from 'styled-components';

const Body = styled.div`
background-image: url(https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80);
  background-size: cover;
`;

const Form = styled.div`
width: 360px;
  background-color: white;
  margin: auto;
  transition: .5s;
  border-radius: 15px;
  padding: 10px;
  &:hover{
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.24);
  }
`;

const Register = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`;

const Input = styled.input`
margin: 10px 0 10px 0;
padding: 15px;
font-size: 16px;
border: 0;
font-family: "Roboto", sans-serif;
background: #f2f2f2;
`;

const Button = styled.button`
background: black;
color: white;
cursor: pointer;
padding: 15px;
font-size: 20px;
font-weight:"bold";
`;

export default function Add() {
    const [img, setimg] = useState("");
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [sdesc, setsdesc] = useState("");
    const [ldesc, setldesc] = useState("");
    function handleSearch(e) {
        setimg(e.target.files[0]);
    }
    function handlenme(e) {
        setname(e.target.value);
    }
    function handleprc(e) {
        setprice(e.target.value);
    }
    function handlesds(e) {
        setsdesc(e.target.value);
    }
    function handlelds(e) {
        setldesc(e.target.value);
    }
    function handleSubmit(e) {
        var url = 'http://localhost/project/addproduct.php?name='+name+"&price="+price+"&sdesc="+sdesc+"&ldesc="+ldesc;
        const formData = new FormData();
        formData.append('avatar',img)
        axios.post(url, formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      })
        .then(res => {
           if(!res.data.status){
            setname("");
            setprice("");
            setsdesc("");
            setldesc("");
            alert(res.data.message);
           }else{
            setname("");
            setprice("");
            setsdesc("");
            setldesc("");
            alert(res.data.message);
           }
        })
    }

  return (
  <><Navbar /><Body>
      <br /><br />
      <Form>
        <Register>
          {/* Uncomment the next line to show the success message */}
          {<center><div className="success">Add Product</div></center>}<br />
          <Input
            id="first-name"
            className="form-field"
            type="text"
            value={name}
            onChange={handlenme.bind(this)}
            placeholder="Product Name"
            name="name" />
          <Input
            id="last-name"
            className="form-field"
            type="text"
            value={price}
            onChange={handleprc.bind(this)}
            placeholder="Price"
            name="price" />
          <Input
            id="email"
            className="form-field"
            type="text"
            value={sdesc}
            onChange={handlesds.bind(this)}
            placeholder="Short Description"
            name="short_desc" />
          <Input
            id="email"
            className="form-field"
            value={ldesc}
            type="text"
            onChange={handlelds.bind(this)}
            placeholder="Long Description"
            name="long_desc" />
          <Input
            id="email"
            className="form-field"
            type="file"
            placeholder="Select File"
            onChange={handleSearch.bind(this)}
            name="pic" />
          <Button className="form-field" onClick={handleSubmit.bind(this)}>
            Add Product
          </Button>
        </Register>
      </Form>
      <br /><br />
    </Body><Footer /></>
  );
}