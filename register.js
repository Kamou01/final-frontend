function register_user() {
    fetch("https://final-eotp.herokuapp.com/user-registration/")
    .then(response => response.json())
    .then(data => console.log(data))
}
register_user()