let comics = []

// FUNCTION TO FETCH COMIC DATA FROM DATABASE
function fetch_comics() {
    fetch("https://final-app3.herokuapp.com/view_comics/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
        comics = data.comics;


        let container = document.querySelector("#comic-container");
        comics.forEach(comic => {
            container.innerHTML += renderBook(comic)
        });
    })
}


function renderBook(book) {
    return `       <div class="comic-books" style="width: 18rem;">
    <img src="${book.image}" class="display-img" alt="comic book image">
    <div class="card-body">
      <h2 class="heading-name">${book.name}</h2>
      <h3 class="cat-col">${book.category}</h3>
      <h3 class="card-text">${book.description}</h3>
      <h4>${book.price}</h4>
      <button type="button" class="addto-cart" onclick="addToCart(${book.id})">
      Add to Cart <i class="fas fa-cart-plus"></i>
    </button>
    <button class="dlt-btn" onclick="deleteProduct(${book.id})">Delete <i class="fas fa-trash"></i></button>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#book-${book.id}">
  Update <i class="fas fa-edit"></i>
</button>
    </div>
  </div>
    

<!-- Modal -->
<div class="modal fade" id="book-${book.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${book.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form
      class="update-form"
      onsubmit="event.preventDefault(); updateProduct(${book.id})"
      id="update-form-${book.id}"
    >
      <div class="updating-name">
        <label for="name" class="name-1"></label>
        <input
          type="text"
          name="name"
          id="update-name-${book.id}"
          class="update-name"
          placeholder="Name"
          value=${book.name}
          
        />
      </div>

      <div class="updating-price">
              <label for="price" class="price"></label>
              <input
                type="text"
                name="price"
                id="update-price-${book.id}"
                class="update-price"
                placeholder="Price"
                value=${book.price}
                
              />
            </div>
  
            <div class="updating-description">
              <label for="description" class="description"></label>
              <input
                type="text"
                name="description"
                id="update-description-${book.id}"
                class="update-description"
                placeholder="Description"
                value=${book.description}
                
              />
            </div>
  
            <div class="updating-category">
              <label for="category" class="category"></label>
              <input
                type="text"
                name="category"
                id="update-category-${book.id}"
                class="update-category"
                placeholder="Category"
                value=${book.category}
                
              />
              
            </div>
            <div class="updating-image">
              <label for="image" class="image"></label>
              <input
                type="text"
                name="image"
                id="update-image-${book.id}"
                class="update-image"
                placeholder="Url link for the Image"
                value=${book.image}
                
              />
              
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">update</button>
        </form>
      </div>
    </div>
  </div>
</div>
  </div>`
}

fetch_comics()

function searchFilter(){
  let searchTerm = document.querySelector("#search").value
  console.log(searchTerm)
  let foundComics = comics.filter(book => {
    return book.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(foundComics)
  let container = document.querySelector("#comic-container");
  container.innerHTML = ''
  foundComics.forEach(comic => {
            container.innerHTML += renderBook(comic)
        });
}

function deleteProduct(id) {
  fetch(`https://final-app3.herokuapp.com/delete_comics/${id}/`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          location.reload()
      })


}

// let update_form = document.querySelector(".update-form");

// //  ON SUBMISSION OF THE edit_form, RUN THE FOLLOWING CODE
// update_form.addEventListener("submit", e => {
//     //  PREVENT THE DEFAULT ACTION OF THE FORM 
//     e.preventDefault();

//     //  CREATE AN OBJECT CONTAINING ALL THE INPUTS VALUES


//     //  CALL THE updateProduct FUNCTION AND PASS IN THE updated_item
//     updateProduct(updated_item);
// })

function updateProduct(id) {
  console.log("Hello")
    let updated_item = {
        name: document.querySelector(`#update-name-${id}`).value,
        price: document.querySelector(`#update-price-${id}`).value,
        description: document.querySelector(`#update-description-${id}`).value,
        category: document.querySelector(`#update-category-${id}`).value,
        image: document.querySelector(`#update-image-${id}`).value
    }
    fetch(`https://final-app3.herokuapp.com/updating_comic/${id}/`, {
        method: 'PUT',
        //  PASS IN A JSON VERSION OF THE updated_item
        body: JSON.stringify(updated_item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          alert("Updated successfully")
          location.reload()
        })
}

// will be filled with fetch call

function addToCart(comic_id) {
    //creating a cart
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    //find item in from products
    const itemToAdd = comics.find(comic => comic.id == comic_id);
    //put item in cart
    cart.push(itemToAdd)
    //store cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Item added to cart")
}