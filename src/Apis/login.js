import Cookies from "js-cookie";

const login = async (email, pass) => {
    var formData = new FormData();
    formData.append("username", email);
    formData.append("password", pass);

    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    await fetch("http://localhost:8000/api/account/login", requestOptions)
        .then(response => response.text())
        .then(result => (
            Cookies.set('Token', JSON.parse(result).token)
        ))
        .catch(error => console.log('error', error));

}

export default login;