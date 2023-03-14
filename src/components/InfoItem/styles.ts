import styled from "styled-components";

export const InfoItensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  gap: 0.75rem;
`;

interface InfoItemProps {
  iconColor: string;
};

export const IconContainer = styled.div<InfoItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ iconColor }) => iconColor };
  color: ${({theme}) => theme.colors["base-background"]};
  
  border-radius: 50%;
  
  padding: 0.5rem;
`;