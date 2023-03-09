import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  
  width: 100%;
  padding: 1.25rem;
  padding-top: 0;
  text-align: center;
  
  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem
  }
`;

interface TagProps {
  marginTop?: number,
  marginBottom?: number
};

export const Tag = styled.div<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  margin-top: ${({marginTop})=> [`${marginTop ?? 0}rem`]};
  margin-bottom: ${({marginBottom})=> [`${marginBottom ?? 0}rem`]};
  
  span {
    background-color: ${({theme}) => theme.colors["brand-yellow-light"]};
    border-radius: 999px;
    
    padding: 0.25rem 0.5rem;
    
    color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    font-size: ${({theme})=> theme.textSizes["components-tag"]};
    font-weight: bold;
    font-family: ${({theme})=> theme.fonts.regular};
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  
  p {
    line-height: 0.75rem;
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({theme}) => theme.colors["brand-purple-dark"]};
    color: ${({theme}) => theme.colors["base-card"]};
    border: none;

    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.12s;
    
    &:hover {
      background-color: ${({theme}) => theme.colors["brand-purple"]};
    }
  }
`;