import { ConfirmationSection } from "../ConfirmationSection";

import { useCart } from "../../../../hooks/useCart";

import { TitleText } from "../../../../styles/text";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export const SelectedCoffees = () => {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {/* {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))} */}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};
