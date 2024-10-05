import ProductCard from "./components/productCard.js";
import CartItems  from "./components/cartItems.js";
customElements.define('product-card',ProductCard)
customElements.define('cart-items',CartItems)



window.cart = {
  items: []
}
