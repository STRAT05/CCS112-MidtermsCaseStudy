import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage"; // ✅ Import your Checkout page

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ Add this */}
    </Routes>
  );
}

export default App;
