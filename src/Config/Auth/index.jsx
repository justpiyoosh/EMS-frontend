import Cookies from "js-cookie";

const Auth = {
    async signIn(email, pass) {
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
            .then(result => Cookies.set('Token', JSON.parse(result).token))
            .catch(error => console.log('error', error));
    },
    signUp(username, email, pass, confPass) {
        var formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", pass);
        formData.append("password2", confPass);

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
        if (Cookies.get('Token') !== 'null' && Cookies.get('Token') !== 'undefined')
            return true;
        else {
            // alert("Either email or password is wrong");
            return false;
        }
    }
};
export default Auth;