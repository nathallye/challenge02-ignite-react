import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/* renderiza o conteúdo dinamicamente */}
    </LayoutContainer>
  );
};