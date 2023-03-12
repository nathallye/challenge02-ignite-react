import { ReactNode } from "react";

import { IconContainer, InfoItensContainer } from "./styles";
import { RegularText } from "../../styles/text";

interface InfoItemProps {
  icon: ReactNode;
  content: string | ReactNode;
  iconColor: string;
}

export function InfoItem({ icon, content, iconColor }: InfoItemProps) {
  return (
    <InfoItensContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof content === "string" ? (
        <RegularText color="text" size="m">{content}</RegularText>
      ) : (content)}
    </InfoItensContainer>
  );
}
