import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.colors["base-background"]};
  
  width: 100%;
  height: 6.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 850px) {
      padding: 0 1rem;
    }
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant?: "purple" | "yellow";
};

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0 0.5rem;
  position: relative;

  border-radius: 6px;
  border: none;
  
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  cursor: inherit;
  
  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: calc(-1.25rem/2);
    
    border-radius: 50%;
    right: calc(-1.25rem/2);
    
    color: ${({theme}) => theme.colors["base-white"]};
    font-size: 0.75rem;
    font-weight: 700;
  };

  ${({variant="purple", theme}) => 
    css`
      background-color: ${theme.colors[`brand-${variant}-light`]};
      color: ${theme.colors[`brand-${variant}-dark`]};
    
      span {
        background-color ${theme.colors[`brand-${variant}-dark`]};
      }
    `
  };

  ${({variant="purple", theme}) => variant === "purple" && 
    css`
      svg {
        color: ${({theme}) => theme.colors[`brand-purple`]};
      }
    `
  };
`;