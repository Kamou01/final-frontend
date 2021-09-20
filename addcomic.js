

function addProduct() {
    let new_item = {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        category: document.querySelector("#category").value,
        description: document.querySelector("#description").value,
        image: document.querySelector("#image").value
    }
    console.log(new_item)
    fetch("https://final-app3.herokuapp.com/adding_comics/", {
        method: 'POST',
        //  PASS IN A JSON VERSION OF THE new_item
        body: JSON.stringify(new_item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(responce => responce.json())
    .then(data => {
        console.log(data);

    })

}