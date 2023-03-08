import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { InfoItem } from "../../../../components/InfoItem";

import { InfosContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import { RegularText } from "../../../../styles/text";

import imgIntro from "../../../../assets/img-intro.svg";

export const Intro = () => {

  const {colors} = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <InfosContainer>
            <InfoItem
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={colors["brand-yellow-dark"]}
            />
            <InfoItem
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor={colors["base-text"]}
            />
            <InfoItem
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor={colors["brand-yellow"]}
            />
            <InfoItem
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor={colors["brand-purple"]}
            />
          </InfosContainer> 
        </div>
        <img src={imgIntro} />
      </IntroContent>
    </IntroContainer>
  );
};
