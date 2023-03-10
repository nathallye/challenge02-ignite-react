import { Minus, Plus } from "phosphor-react";
import { RegularText } from "../../styles/text";
import { QuantitySelectorContainer, SelectorButton } from "./styles";

interface QuantitySelectorProps {
  size?: "small" | "medium",
  quantity: number,
  onIncrease: () => void,
  onDecrease: () => void,
};

export const QuantitySelector = ({ size = "medium", quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <QuantitySelectorContainer size={size}>
      <SelectorButton disabled={quantity <= 1} onClick={onDecrease}>
        <Minus weight="bold" size={14} />
      </SelectorButton>

      <RegularText weight="bold">{quantity}</RegularText>
      
      <SelectorButton onClick={onIncrease}>
        <Plus weight="bold" size={14}/>
      </SelectorButton>
    </QuantitySelectorContainer>
  );
};
