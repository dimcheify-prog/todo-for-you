import styled from "styled-components";
import {FcCheckmark} from "react-icons/fc";
import {Link} from "react-router-dom";

export const TaskItemStyles = styled.div`
  width: 100%;  
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const TaskTitle = styled(Link)`
  font-size: 2rem;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    color: chocolate;
  }
`;

export const Checkmark = styled(FcCheckmark)`
  flex: 1;
  font-size: 3rem;
`;