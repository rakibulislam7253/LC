import axios from 'axios';
const BASE_URL = import.meta.env.VITE_APP_CONTROL_CENTER_API;
const API_URL = BASE_URL + 'api/Account';
const REQEST_URL = API_URL;

class AccountService {
    changePassword(changePassword) {
        console.log('changePassword', changePassword);
        return axios.post(REQEST_URL + '/change_password', changePassword);
    }
    lockUser(user_id) {
        console.log('lockUser', user_id);
        return axios.post(REQEST_URL + '/lock_user/' + user_id);
    }

    unlockUser(user_id) {
        console.log('unlockUser', user_id);
        return axios.post(REQEST_URL + '/unlock_user/?_user_id=' + user_id);
    }
    createRegister(regObj) {
        console.log('userCreation', regObj);
        return axios.post(REQEST_URL + '/register', regObj);
    }
    search_user_from_ad(ad_user) {
        console.log('search_user_from_ad', ad_user);
        return axios.post(REQEST_URL + '/search_user_from_ad' + '?userName=' + ad_user);
    }
    check_user_exist(exist_user) {
        console.log('check_user_exist', exist_user);
        return axios.post(REQEST_URL + '/check_user_exist?userName=' + exist_user);
    }
}

export default new AccountService();
