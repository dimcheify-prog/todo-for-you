import styled from "styled-components";

export const MyModalStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.div`
  background: #f6e0e0;
  width: 50rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TitleModal = styled.h2``;

export const TextModal = styled.p`
  font-size: 1.6rem;  
`;

export const ButtonBoxModal = styled.div`
  width: 80%;  
  display: inline-flex;
  justify-content: space-between;
`;