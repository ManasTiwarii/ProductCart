document.addEventListener('DOMContentLoaded',()=>{
  const products = [
    {id:1,name:"Product 1",price: 29.99},
    {id:2,name:"Product 2",price: 23.99},
    {id:3,name:"Product 3",price: 2.99}
  ]

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-item");
  const emptyCartMessage= document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price"); 
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach(products => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML = `
    <span>${products.name} - $ ${products.price.toFixed(2)}</span>
    <button data-id="${products.id}">Add to cart</button>`;
    productList.appendChild(productDiv)
  })


  productList.addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON"){
     const productId = parseInt(e.target.getAttribute('data-id')) 
     const product = products.find(p=> p.id === productId)
     addToCart(product)
    
    }
  })

  function addToCart(product){
    cart.push(product); 
    renderCart()
  }

  function renderCart(){
    cartItems.innerHTML ="";
    let totalPrice= 0 ;

    if(cart.length>0){

      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $ ${item.price.toFixed(2)}`;

        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$ ${totalPrice.toFixed(2) }`
      }); 
    }else{
  emptyCartMessage.classList.add("hidden");      
  totalPriceDisplay.textContent = `$ 0.00`;
    }
  }

 checkoutBtn.addEventListener('click', ()=>{
  cart.length = 0;
  alert("Checkout successfully")
  renderCart(); 
 })
})