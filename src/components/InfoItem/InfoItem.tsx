import { ReactNode } from "react";

import { IconContainer, InfoItensContainer } from "./styles";
import { RegularText } from "../../styles/text";


interface InfoItemProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

export function InfoItem({ icon, text, iconColor }: InfoItemProps) {
  return (
    <InfoItensContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === "string" ? (
        <RegularText color="text" size="m">{text}</RegularText>
      ) : (text)}
    </InfoItensContainer>
  );
}
