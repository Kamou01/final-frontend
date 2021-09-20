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
fetch_comics()

function renderBook(book) {
    return `       <div class="comic-books">
    <img
      src="./images/7 Essential Black Panther Comics That Shaped the Wakandan Warrior (1).jpeg"
      alt="pic"
    />
    <h1>${book.name}</h1>
    <h2>${book.category}</h2>
    <h3>${book.description}</h3>
    <h3>${book.price}</h3>
    <button class="addto-cart">
      Add to Cart <i class="fas fa-cart-plus"></i>
    </button>
    <button class"dlt-btn" onclick="deleteProduct(${book.id})">delete</button>
  </div>`
}

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