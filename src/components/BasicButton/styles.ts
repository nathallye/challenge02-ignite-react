import styled, { css } from "styled-components";

export const BasicButtonContainer = styled.button`
  background-color: ${({theme}) => theme.colors["brand-yellow"]};
  
  border: none;
  border-radius: 6px;
  
  width: 100%;
  padding: 0.75rem 0.5rem;
  margin-top: 1.75rem;

  color: ${({theme}) => theme.colors["base-white"]};
  font-weight: 700;
  font-size: ${({theme}) => theme.textSizes["components-button-g"]};
  text-transform: uppercase;
  transition: 0.15s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }
`;