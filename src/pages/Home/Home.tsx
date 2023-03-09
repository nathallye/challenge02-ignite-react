import { Intro } from "./components/Intro";
import { Menu } from "./components/Menu";

import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Intro />
      <Menu />
    </HomeContainer>
  );
};
