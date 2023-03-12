import styled, { css } from "styled-components";

interface QuantitySelectorContainerProps {
  size?: "small"| "medium"
};

export const QuantitySelectorContainer = styled.div<QuantitySelectorContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  
  background: ${({theme}) => theme.colors["base-button"]};
  
  gap: 8px;
  border-radius: 6px;
  height: 2.375rem;

  span {
    color: ${({theme}) => theme.colors["base-title"]};
    
    text-align: center;
    
    width: 100%;
  }

  & focus {
    outline: none;
  }

  ${({size}) => size === "medium" && css`
    padding: 0.5rem;
  `}

  ${({size}) => size === "small" && css`
    padding: 0.3rem 0.5rem;
  `}
`;

export const SelectorButton = styled.button.attrs({
  type: "button"
})`

  background: none;
  color: ${({theme }) => theme.colors["brand-purple"]};
  border: none;
  
  transition: 0.15s;
  
  &:disabled {
    opacity: 0.4;
  }
  
  &:not(:disabled):hover {
    color: ${({theme}) => theme.colors["brand-purple-dark"]}
  }
`;