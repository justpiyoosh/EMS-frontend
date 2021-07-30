import Cookies from "js-cookie";

const Auth = {
    isAuthenticated() {
        if (Cookies.get('Token') === null || Cookies.get('Token') === undefined)
            return false;
        else return true;
    },
    signOut() {
        Cookies.set('Token', null);
    },
};
export default Auth;