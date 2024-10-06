import ProductCard from "./components/productCard.js";
import CartItems  from "./components/cartItems.js";
import QuantityInput from "./components/qty-input.js";

customElements.define('product-card',ProductCard)
customElements.define('cart-items',CartItems)
customElements.define('quantity-input',QuantityInput);


window.cart = {
  items: []
}
