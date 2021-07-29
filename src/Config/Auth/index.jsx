import Cookies from "js-cookie";

const Auth = {
    // isAuthenticated: false,
    authenticate() {
        // this.isAuthenticated = true;
        Cookies.set('isAuthenticated',true);
        Cookies.set('Token','Token');
    },
    signOut() {
        // this.isAuthenticated = false;
        Cookies.set('isAuthenticated',false);
        Cookies.set('Token',null);
    },
    getAuth() {
        return Cookies.get('isAuthenticated');
    }
};
export default Auth;