import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { useCart } from "../../../../hooks/useCart";

import { formatMoney } from "../../../../utils/formatMoney";

import { QuantitySelector } from "../../../../components/QuantitySelector";

import { AddCartWrapper, CardFooter, CoffeeCardContainer, Tag } from "./styles";
import { RegularText, TitleText } from "../../../../styles/text";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
};

interface CoffeeCardProps {
  coffee: Coffee
};

export const CoffeeCard = ({coffee}: CoffeeCardProps) => {

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(state => state + 1);
  };

  const handleDecrease = () => {
    setQuantity(state => state - 1);
  };

  const { addCoffeeToCart } = useCart();

  const addToCartHandler = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity: quantity
    };

    addCoffeeToCart(coffeeToAdd);
  };

  const formatedPrice = formatMoney(coffee.price > 0 ? coffee.price : 0.00);

  return (
    <CoffeeCardContainer>
      <img src={`/${coffee.photo}`} />

      <Tag marginBottom={1}>
        {coffee.tags.map((tag) => {
          return(
            <span key={`${coffee.id} ${tag}`}>
              {tag}
            </span>
          )
        })}
      </Tag>

      <TitleText size="s" color="subtitle" marginBottom={0.5}>
        {coffee.name}
      </TitleText>
      <RegularText size="s" color="text" marginBottom={2}>
        {coffee.description}
      </RegularText>
      <CardFooter>
        <div>
          <RegularText size="s" color="text">
            R$
          </RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantitySelector 
            quantity={quantity} 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <button onClick={addToCartHandler}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
};
