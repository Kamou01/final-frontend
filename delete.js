function delete_comics() {
    fetch("https://final-eotp.herokuapp.com/delete_comics/")
    .then(response => response.json())
    .then(data => console.log(data))
}

delete_comics()