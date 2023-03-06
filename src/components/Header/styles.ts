import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem; /*Adiciona um espaço entre cada item dentro do container*/
    
    div {
      display: flex;
      align-items: center;

      color: ${(props) => props.theme["gray-800"]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
`;