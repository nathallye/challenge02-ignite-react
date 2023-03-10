import { Minus, Plus } from "phosphor-react";

import { QuantitySelectorContainer, SelectorButton } from "./styles";

export const QuantitySelector = () => {
  return (
    <QuantitySelectorContainer>
      <SelectorButton>
        <Minus weight="bold" size={14} />
      </SelectorButton>
      <input 
        type="number" 
        readOnly={true} 
      />
      <SelectorButton>
        <Plus weight="bold" size={14}/>
      </SelectorButton>
    </QuantitySelectorContainer>
  );
};
