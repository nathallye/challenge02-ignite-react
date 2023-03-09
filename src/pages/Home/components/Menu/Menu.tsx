import { CoffeeCard } from "../CoffeeCard";

import { CoffeeList, MenuContainer } from "./styles";
import { TitleText } from "../../../../styles/text";

import { coffeeList } from "../../../../data/coffee-list";

export const Menu = () => {
  return (
    <MenuContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffeeList.map((coffee) => {
          return(
            <CoffeeCard key={coffee.id} coffee={coffee} />
          )
        })}
      </CoffeeList>
    </MenuContainer>
  );
};
