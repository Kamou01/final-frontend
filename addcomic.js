function adding_comics(){
    fetch("https://final-eotp.herokuapp.com/adding_comic/")
    .then(response => response.json())
    .then(data => console.log(data))
}
adding_comics()