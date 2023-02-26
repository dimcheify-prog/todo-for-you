import styled from "styled-components";

export const DefaultInput = styled.input`
  width: 20rem;
  height: 3rem;
  font-size: 2rem;
  padding: 0 .5rem;
  border: 1px solid #12144b;
  &:focus {
    outline: none;
    border: 2px solid #12144b;
  }
`;