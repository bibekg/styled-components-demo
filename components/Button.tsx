import colors from "../styles/colors";
import * as animations from "../styles/animations";
import styled from "styled-components";

const getButtonColor = props => {
  if (props.secondary) {
    return colors.blue;
  }
  return colors.white;
};

const getButtonBackgroundColor = props => {
  if (props.secondary) {
    return colors.white;
  }
  return colors.blue;
};

const getBorderColor = props => {
  if (props.secondary) {
    return colors.blue;
  }
  return colors.white;
};

const Button = styled.button`
  border: 2px ${getBorderColor} solid;
  outline: none;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: ${props => props.fontSize || "1.2em"};
  background-color: ${getButtonBackgroundColor};
  color: ${getButtonColor};
  animation: ${props => (props.rotateForNoReason ? animations.rotate360 : "")}
    1s ease infinite;
`;

export default Button;
