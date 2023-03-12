import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
  position: relative;
  
  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;

interface InputContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: ${({ theme }) => theme.colors["base-input"]};
  border: 2px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 4px;
  
  height: 2.625rem;
  transition: 0.4s;
  overflow: hidden;
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
  
  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["base-error"]};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;

  background: none;
  border: none;
  
  padding: 0 0.75rem;
  height: 100%;
  
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const RightText = styled.p`
  margin-right: 0.75rem;
  
  color: ${({ theme }) => theme.colors["base-label"]};
  font-style: italic;
  font-size: 0.75rem;
`;