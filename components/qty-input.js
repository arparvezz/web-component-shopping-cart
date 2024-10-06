class QuantityInput extends HTMLElement{
    constructor(){
        super()
        this.cartItems = document.querySelector('cart-items')
        this.input = this.querySelector('input')
        
        this.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click',this.onButtonClick.bind(this))
        })
        this.input.addEventListener('change',this.onInputChange.bind(this))
        
    }

    onInputChange(event){
        event.preventDefault();
        this.cartItems.updateQty(this.input.dataset.index, this.input.value)
    }

    onButtonClick(event){
        event.preventDefault();
        const previousValue = this.input.value;

        event.target.name == 'plus' ? this.input.stepUp() : this.input.stepDown()
        this.cartItems.updateQty(this.input.dataset.index, this.input.value)
    }
}


export default QuantityInput;