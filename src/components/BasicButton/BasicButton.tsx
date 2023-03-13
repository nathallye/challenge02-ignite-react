import { ButtonHTMLAttributes } from "react";

import { BasicButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: String | number;
};

export const BasicButton = ({ content, ...props}: ButtonProps) => {
  return (
    <BasicButtonContainer {...props}>
      {content}
    </BasicButtonContainer>
  );
};
