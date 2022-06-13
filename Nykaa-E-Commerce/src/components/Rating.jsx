import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating, Input, InputContainer ,Button} from "./RatingStyles"; 
import { Send } from "@material-ui/icons";



const Rate = () => {
	const [rate, setRate] = useState(0);
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
        <Input placeholder="Tell something about this product" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
	  </Container>
	);
  };
	
  export default Rate;