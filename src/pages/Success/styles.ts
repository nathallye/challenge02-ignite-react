import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors["base-background"]};
  border-radius: 6px 36px 6px 36px;
  
  gap: 2rem;
  padding: 2.5rem;
  position: relative;
  min-width: 32rem;
  
  &::before {
    content: "";
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: 7px 37px 7px 37px;
    
    position: absolute;
    inset: -2px;
    z-index: -1;
  }
`;