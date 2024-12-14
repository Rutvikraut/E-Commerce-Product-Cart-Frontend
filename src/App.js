import { getAllProducts } from "./api/productApi";
import CartCheckOut from "./components/CartCheckOut";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">E-Commerce Shopping Cart</h1>
      <Products/>
      <CartCheckOut/>
    </div>
  );
}

export default App;
