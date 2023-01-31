import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => <h1>Shop</h1>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;
