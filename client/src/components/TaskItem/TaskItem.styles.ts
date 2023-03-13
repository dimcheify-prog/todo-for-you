import styled from "styled-components";
import {FcCheckmark} from "react-icons/fc";
import {Link} from "react-router-dom";

export const TaskItemStyles = styled.div`
  width: 100%;
  height: 5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 1rem;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    color: #fff;
  }
`;

export const TaskTitle = styled(Link)`
  font-size: 2rem;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const Checkmark = styled(FcCheckmark)`
  flex: 1;
  font-size: 3rem;
`;