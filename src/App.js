import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import ShopPage from "./routes/shop/shop.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;
