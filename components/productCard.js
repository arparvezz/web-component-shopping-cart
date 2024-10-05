class ProductCard extends HTMLElement{
  constructor(){
    super();

    this.img = this.getAttribute('img');
    this.name = this.getAttribute('name');
    this.id = this.getAttribute('id');
    this.price = this.getAttribute('price');

    this.innerHTML = `
      <div class="product-card-wrapper">
        <div class="product-img-part">
          <img class="product-img" src="${this.img}"/>
        </div>
        <div class="product-info-part">
          <h2 class="product-title">${this.name}</h2>
        </div>
      </div>
    `
    let addToCartBtn = document.createElement('button')
    addToCartBtn.classList.add('add-to-cart-btn')
    addToCartBtn.innerText = 'Add to cart'
    this.appendChild(addToCartBtn)

    addToCartBtn.addEventListener('click', this.addtoCart.bind(this))
  }


  addtoCart(){
    let itemObj = {
      id: this.id,
      name: this.name,
      qty: 1,
      price: this.price
    }
    window.cart.items.push(itemObj);
    console.log(cart.items);
  }
}


export default ProductCard;