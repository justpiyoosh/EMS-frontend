import Cookies from "js-cookie";

const Auth = {
    async signIn() {
        var formData = new FormData();
        formData.append("username", "yashusrivastavab1231@gmail.com");
        formData.append("password", "1");

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        await fetch("http://localhost:8000/api/account/login", requestOptions)
            .then(response => response.text())
            .then(result => Cookies.set('Token', JSON.parse(result).token))
            .catch(error => console.log('error', error));
    },
    SignUp() {
        var formData = new FormData();
        formData.append("username", "yashu2");
        formData.append("email", "yashusrivastava@gmail.com");
        formData.append("password", "1");
        formData.append("password2", "1");

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/api/account/register", requestOptions)
            .then(response => response.text())
            .then(result => Cookies.set('Token', JSON.parse(result).token))
            .catch(error => console.log('error', error));
    },
    signOut() {
        Cookies.set('Token', "null");
    },
    getAuth() {
        if (Cookies.get('Token') !== 'null')
            return true;
        else
            return false;
    }
};
export default Auth;