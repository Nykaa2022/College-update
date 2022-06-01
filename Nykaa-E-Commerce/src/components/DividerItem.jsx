import { Divider } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";

const Title = styled.h1`
text-transform: uppercase;
background-image: linear-gradient(
  -45deg,
  #ff1361 0%, #44107a 29%, #44107a 67%, #ff1361 100%);
background-size: auto auto;
background-clip: border-box;
background-size: 100% 100%;
color: #000;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline-block;
font-size: 38px;
}
${mobile({ fontSize: "24px" })}

`;


const DividerItem = ({ item }) => {
  return (
        <><Divider /><Title>{item.title}</Title><Divider /></>
  );
};

export default DividerItem;
