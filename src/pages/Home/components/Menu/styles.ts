import styled from "styled-components";

export const MenuContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  row-gap: 2rem;
  column-gap: 2.5rem;
  
  width: 100%;
  margin-top: 3.5rem;
`;