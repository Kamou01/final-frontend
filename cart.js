let cart = JSON.parse(localStorage.getItem("cart"))

let container = document.querySelector("#cart-items");
        cart.forEach(comic => {
            container.innerHTML += renderCart(comic)
        })

function renderCart(cart) {
    return `       <div class="comic-books" style="width: 18rem;">
  <img src="${cart.img}" class="display-img" alt="comicbook image">
  <div class="card-body">
   <h2 class="heading-name">${cart.name}</h2>
      <h3 class="cat-col">${cart.category}</h3>
      <h3 class="card-text">${cart.description}</h3>
      <h4>${cart.price}</h4>
  </div>
</div>
}

console.log(cart)

function removeFromCart(id) {
    cart = JSON.parse(localStorage.getItem("cart"))
    cart = cart.filter(item => item.id != id)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Item deleted")
    location.reload()
}

function clearCart() {
    localStorage.removeItem("cart")
    alert("Cart cleared")
    location.reload()
}
