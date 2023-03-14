import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "../../hooks/useCart";

import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import logoCoffeeDelivery from "/logo-coffee-delivery.svg";

export const Header = () => {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/Home">
          <img src={logoCoffeeDelivery} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Macapá, AP {/*TODO: Verificar alguma lib que verifica a localização*/}
          </HeaderButton>
          <NavLink to="/Checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
};
