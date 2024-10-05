class CartItems extends HTMLElement{
  constructor(){
    super();
  }

  render(){
    this.innerHTML = ''
    let cartItemsContainer = document.createElement('div');
    cartItemsContainer.classList.add('cart-items-container')
    let singleItem = document.createElement('div');

    window.cart.items.forEach((item,ind) => {      
      singleItem.innerHTML += `
        <div class="cart-single-item">
          <img class="cart-item-img" src="${item.img}"/>
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-name">$${item.price}</p>
          <p class="cart-item-qty">${item.qty}</p>
        </div>
      `
    });
    cartItemsContainer.appendChild(singleItem);
    this.appendChild(cartItemsContainer)
    let cartTotal = 0;
    window.cart.items.forEach(item => {
      cartTotal += item.price * item.qty;
    })

    let footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <p>Total price is: </p>
        <p>$${cartTotal}</p>
      </div>
    `
    this.appendChild(footer)
  }
}

export default CartItems;