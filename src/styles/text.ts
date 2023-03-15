import styled from "styled-components";

interface TitleTextProps {
  color?: "title" | "subtitle" | "text",
  size?: "xl" | "l" | "m" | "s" | "xs",
  weight?: string | number,
  marginTop?: number,
  marginBottom?: number
};

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({theme, color})=> theme.colors[`base-${color ?? "title"}`]};
  font-family: ${({theme})=> theme.fonts.title};
  font-size: ${({theme, size})=> theme.textSizes[`title-title-${size ?? "l"}`]};
  line-height: 130%;
  font-weight: ${({ weight })=> [`${weight ?? 800}`]};
  
  margin-top: ${({marginTop})=> [`${marginTop ?? 0}rem`]};
  margin-bottom: ${({marginBottom})=> [`${marginBottom ?? 0}rem`]};

  @media (max-width: 850px) {
    text-align: center;
  }
`;

interface RegularTextProps {
  color?: "label" | "subtitle" | "text" | "title",
  size?: "l" | "m" | "s",
  weight?: string | number,
  marginTop?: number,
  marginBottom?: number
};

export const RegularText = styled.p<RegularTextProps>`
  color: ${({theme, color})=> theme.colors[`base-${color ?? "title"}`]};
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${({theme, size, weight})=> theme.textSizes[`text-regular-${size ?? "m"}`]};
  font-weight: ${({weight}) => [`${weight ?? 400}`]};
  line-height: 130%;
  
  margin-top: ${({marginTop})=> [`${marginTop ?? 0}rem`]};
  margin-bottom: ${({marginBottom})=> [`${marginBottom ?? 0}rem`]};

  @media (max-width: 850px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;