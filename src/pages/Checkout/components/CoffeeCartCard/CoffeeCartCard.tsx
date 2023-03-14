import { Trash } from "phosphor-react";

import { useCart } from "../../../../hooks/useCart";
import { CartItem } from "../../../../context/CartContext"; 
import { formatMoney } from "../../../../utils/formatMoney";

import { QuantitySelector } from "../../../../components/QuantitySelector";

import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { RegularText } from "../../../../styles/text";

interface CoffeeCartCardProps {
  coffee: CartItem;
};

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {

  const { changeCartItemQuantity, removeCartItem } = useCart();

  const increaseHandler = () => {
    changeCartItemQuantity(coffee.id, "increase");
  };

  const decreaseHandler = () => {
    changeCartItemQuantity(coffee.id, "decrease");
  };

  const removeHandler = () => {
    removeCartItem(coffee.id);
  };

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/${coffee.photo}`} />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantitySelector
              onIncrease={increaseHandler}
              onDecrease={decreaseHandler}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={removeHandler}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
};
