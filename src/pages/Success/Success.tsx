import { useTheme } from "styled-components";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

import { InfoItem } from "../../components/InfoItem";

import { OrderDetailsContainer, SuccessContainer } from "./styles";
import { RegularText, TitleText } from "../../styles/text";

import successIllustration from "../../assets/success-illustration.svg";

export const Success = () => {
  const { colors } = useTheme();

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
                Entrega em <strong> rua, numero </strong>
                <br />
                bairro - cidade, uf
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
                <strong>método de pagamento</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={successIllustration} />
      </section>
    </SuccessContainer>
  );
};
