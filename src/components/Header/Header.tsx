import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderContainer } from "./styles";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="Localização">
          <div>
            <MapPin />
            Porto Alegre, RS
          </div>
        </NavLink>
        <NavLink to="/history" title="Carrinho">
          <div>
            <ShoppingCart />
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
