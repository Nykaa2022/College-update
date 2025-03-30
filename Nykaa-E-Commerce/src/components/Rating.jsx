import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating, Input, InputContainer ,Button} from "./RatingStyles"; 
import { Send } from "@mui/icons-material";
import { PriceCheckTwoTone } from "@mui/icons-material";
import axios from 'axios';


const Rate = ({id}) => {
	console.log("Pro id: ",id);
	const [rate, setRate] = useState(0);
	const [name, setname] = useState("");
	function handlenme(e) {
        setname(e.target.value);
    }
	function handleSubmit(e) {
		if(localStorage.getItem("username") === null){
			alert("Please Login")
		  }else{
			if(name == ""){
				alert("No empty comments")
			}else{
				var url = 'http://localhost/project/addcomment.php?comment='+name+'&pid='+id+'&user='+localStorage.getItem("username");
				const formData = new FormData();
				formData.append('avatar',"hi")
				axios.post(url, formData,{
				headers: {
					'content-type': 'multipart/form-data'
					}
				})
					.then(res => {
					if(!res.data.status){
						setname("");
						alert(res.data.message);
					}else{
						window.location.reload();
						setname("");
						alert(res.data.message);
					}
					})
				}
		
    //     
		  }
     }
	return (
	  <Container>
		{[...Array(5)].map((item, index) => {
		  const givenRating = index + 1;
		  return (
			<label>
			  <Radio
				type="radio"
				value={givenRating}
				onClick={() => {
				  setRate(givenRating);
				  alert(`Are you sure you want to give ${givenRating} stars ?`);
				}}
			  />
			  <Rating>
				<FaStar
				  color={
					givenRating < rate || givenRating === rate
					  ? "teal"
					  : "rgb(192,192,192)"
				  }
				/>
			  </Rating>
			</label>
		  );
		})}
		<InputContainer>
        <Input value={name} onChange={handlenme.bind(this)} placeholder="Tell something about this product" />
        <Button  onClick={handleSubmit.bind(this)}>
          <Send />
        </Button>
      </InputContainer>
	  </Container>
	);
  };
	
  export default Rate;