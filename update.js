function update_comic() {
    fetch("https://final-eotp.herokuapp.com/updating_comic/")
    .then(response => response.json())
    .then(data => console.log(data))
}

update_comic()