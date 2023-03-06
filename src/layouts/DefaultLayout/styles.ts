import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme["gray-100"]};
  
  /* border-radius: 8px;
  
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem; */
`;