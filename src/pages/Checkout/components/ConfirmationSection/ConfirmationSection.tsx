import { BasicButton } from "../../../../components/BasicButton";

import { useCart } from "../../../../hooks/useCart";

import { formatMoney } from "../../../../utils/formatMoney";

import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../styles/text";

const DELIVERY_PRICE = 4.5;

export const ConfirmationSection = () => {
  const { cartItemsTotalPrice, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotalPrice;

  const itemsTotalFormatted = formatMoney(cartItemsTotalPrice > 0 ? cartItemsTotalPrice : 0.00);
  const cartTotalFormatted = formatMoney(cartTotal > 0 ? cartTotal : 0.00);
  const deliveryPriceFormatted = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>
          R$ {itemsTotalFormatted}
        </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>
          R$ {deliveryPriceFormatted}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {cartTotalFormatted}
        </RegularText>
      </div>

      <BasicButton
        content="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
};
