import styled from "styled-components";

import { rgba } from "polished";
import { TitleText } from "../../../../styles/text";

import backgroundIntro from "../../../../assets/background-intro.svg";

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => `url(${backgroundIntro}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors["base-background"]} 0%,
      ${rgba(theme.colors["base-background"], 0.05)} 50%,
      ${theme.colors["base-background"]} 100%
    )`
  };
  background-size: cover;

  width: 100%;
  height: 34rem;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const InfosContainer = styled.div`
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr;
  
  width: 100%;
  margin-top: 4.125rem;
  row-gap: 1.25rem;
`;