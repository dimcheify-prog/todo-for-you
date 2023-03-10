import styled from "styled-components";

export const SingleTaskStyles = styled.div`
  width: 50%;  
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  justify-content: space-between;
`;

export const StatusSpan = styled.span`
  font-size: 1.8rem;  
  
`;

export const TaskTitle = styled.h2`
  font-size: 2rem;
`;

export const ButtonBox = styled.div`
  display: inline-flex;
  width: 40%;
  justify-content: space-between;
`;
