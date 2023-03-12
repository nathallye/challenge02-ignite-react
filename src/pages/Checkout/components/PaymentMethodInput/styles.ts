import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};

      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  
  gap: 0.75rem;
  height: 3rem;
  padding: 0 1rem;
  
  font-size: 0.75rem;
  text-transform: uppercase;
  transition: 0.15s;
  
  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
  
  user-select: none;
`;