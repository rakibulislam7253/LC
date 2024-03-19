import axios from 'axios';
axios.defaults.headers.common['module_id'] = import.meta.env.VITE_APP_MODULE_NAME;
const API_URL = import.meta.env.VITE_APP_CONTROL_CENTER_API;
const REQEST_URL = API_URL + 'api/Login/';

class AuthService {
    login(user) {
        console.log(user);
        return axios.post(REQEST_URL + 'login', {
            userName: user.userName,
            password: user.password
        });
    }
    check_ad_user(ad_user) {
        console.log(ad_user);
        return axios.post(REQEST_URL + 'check_ad_user?user_id=' + ad_user);
    }
    loginWithAD(user) {
        return axios.post(REQEST_URL + 'loginWithAd', {
            userName: user.userName,
            password: user.password
        });
    }
}

export default new AuthService();
