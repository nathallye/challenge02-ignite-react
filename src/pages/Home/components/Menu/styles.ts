import styled from "styled-components";

export const MenuContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h1 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  row-gap: 2rem;
  column-gap: 2.5rem;
  
  margin-top: 3.5rem;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;