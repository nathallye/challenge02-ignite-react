import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "../../hooks/useCart";
import { formatState } from "../../utils/formatState";

import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

import logoCoffeeDelivery from "/logo-coffee-delivery.svg";

export const Header = () => {
  const { cartQuantity } = useCart();
  
  const [currentLocation, setCurrentLocation] = useState<{city: string, state: string}>({city: "Macapá", state: "Amapá"});
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`).then(res => res.json()).then(data => {
          setCurrentLocation({
            city: data.address.city,
            state: data.address.state
          });
        });
      })
    }
  }, []);

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/Home">
          <img src={logoCoffeeDelivery} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            {currentLocation.city}, {formatState(currentLocation.state)}
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
