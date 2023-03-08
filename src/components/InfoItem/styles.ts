import styled from "styled-components";

export const InfoItensConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  gap: 0.75rem;
`;

interface InfoItemProps {
  iconColor: string;
};

export const IconContainer = styled.div<InfoItemProps>`
  background-color: ${({ iconColor }) => iconColor };
  color: ${({theme}) => theme.colors["base-background"]};
  
  border-radius: 50%;
  
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`;