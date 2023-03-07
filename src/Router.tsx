import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element="" />
        <Route path="/Home" element="" />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Success" element="" />
      </Route>
    </Routes>
  );
}
