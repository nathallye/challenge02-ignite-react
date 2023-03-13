import { BasicButton } from "../../../../components/BasicButton";

import { formatMoney } from "../../../../utils/formatMoney";

import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../styles/text";

export const ConfirmationSection = () => {
  // TODO
  // const { cartItemsTotalPrice, cartQuantity } = useCart();
  // const cartTotal = DELIVERY_PRICE + cartItemsTotalPrice;

  // const formattedItemsTotal = formatMoney(cartItemsTotalPrice);
  // const formattedCartTotal = formatMoney(cartTotal);
  // const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>
          {/* R$ {formattedItemsTotal} */}
        </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>
          {/* R$ {formattedDeliveryPrice} */}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          {/* R$ {formattedCartTotal} */}
        </RegularText>
      </div>

      <BasicButton
        content="Confirmar Pedido"
        // disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
};
