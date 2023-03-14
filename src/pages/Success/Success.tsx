import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

import { InfoItem } from "../../components/InfoItem";
import { OrderData } from "../Checkout/Checkout";
import { paymentMethods } from "../Checkout/components/PaymentMethodOptions/PaymentMethodOptions";

import { OrderDetailsContainer, SuccessContainer } from "./styles";
import { RegularText, TitleText } from "../../styles/text";

import successIllustration from "../../assets/success-illustration.svg";

interface LocationType {
  state: OrderData;
}

export const Success = () => {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoItem
            icon={<MapPin weight="fill" />}
            iconColor={colors["brand-purple"]}
            content={
              <RegularText>
                Entrega em <strong>{state.street}, {state.number}</strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoItem
            icon={<Clock weight="fill" />}
            iconColor={colors["brand-yellow"]}
            content={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoItem
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors["brand-yellow-dark"]}
            content={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={successIllustration} />
      </section>
    </SuccessContainer>
  );
};
