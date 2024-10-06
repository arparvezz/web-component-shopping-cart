class CartItems extends HTMLElement{
  constructor(){
    super();
  }

  updateQty(index,value){
    window.cart.items[index].qty = value;
    this.render();
  }
  render(){
    this.innerHTML = ''
    let cartItemsContainer = document.createElement('div');
    cartItemsContainer.classList.add('cart-items-container')
    let singleItem = document.createElement('div');

    if(cart.items.length > 0) {
      
    }
    window.cart.items.forEach((item,ind) => {    
      if(item.qty > 0){
      
      singleItem.innerHTML += `
        <div class="cart-single-item">
          <img class="cart-item-img" src="${item.img}"/>
          <h4 class="cart-item-name">${item.name}</h4>
          <quantity-input class="cart-item-qty">
            <button class="plus-btn" type="button" name="plus">+</button>
            <input class="qty-input-box" type="number" value="${item.qty}" min="0" id="quantity-${ind}" data-index="${ind}"/>
            <button class="minus-btn" type="button" name="minus">-</button>
          </quantity-input>
          <p class="cart-item-price">$${item.price * item.qty}</p>
        </div>
      `}  
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
    if(cartTotal > 0){
      this.appendChild(footer)
    }else{
      cartItemsContainer.style.display = 'none'
    }
  }
}

export default CartItems;