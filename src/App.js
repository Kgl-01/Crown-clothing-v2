import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import ShopPage from "./routes/shop/shop.component";
import CheckoutPage from "./routes/checkout/checkout.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="shop/*" element={<ShopPage />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Route>
  </Routes>
);

export default App;
