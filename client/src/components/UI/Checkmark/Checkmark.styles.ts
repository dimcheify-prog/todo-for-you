import styled from "styled-components";
import {FcCheckmark} from "react-icons/fc";

export const CheckmarkStyles = styled(FcCheckmark)<{status: boolean}>`
  flex: 1;
  font-size: 3rem;
  cursor: pointer;
  opacity: ${props => props.status ? 1 : 0.3};
`;