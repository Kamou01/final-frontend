function view_comics() {
    fetch("https://final-eotp.herokuapp.com/view_comics/")
    .then(response => response.json())
    .then(data => {
        let comics = data.products;
        let container = document.querySelector(".row1");

        comics.forEach(comic => {
            container.innerHTML += renderBook(comic)
        });
    })
}
view_comics()

function renderBook(book) {
    return `       <div class="comic-books">
    <img
      src="./images/7 Essential Black Panther Comics That Shaped the Wakandan Warrior (1).jpeg"
      alt="pic"
    />
    <h1>name</h1>
    <h3>category</h3>
    <p>description</p>
    <h5>price</h5>
    <button class="addto-cart">
      Add to Cart <i class="fas fa-cart-plus"></i>
    </button>
  </div>`
}


function view_comic() {
    fetch("https://final-eotp.herokuapp.com/view_comic/")
    .then(response => response.json())
    .then(data => console.log(data))
}


