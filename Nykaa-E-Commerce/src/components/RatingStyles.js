import styled from 'styled-components';
import { mobile } from "../responsive";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 60vh;
font-size: 60px;
`
export const Radio = styled.input`
display: none;
`
export const Rating = styled.div`
cursor: pointer;
`
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin-left:5%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
