import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  display: flex;
  justify-content: space-between;
  
  gap: 2rem;
  width: 100%;
`;

export const SectionBaseStyle = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  
  width: 100%;
  padding: 2.5rem;
`;