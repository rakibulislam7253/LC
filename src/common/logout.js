const BASE_URL = import.meta.env.VITE_APP_CONTROL_CENTER_API;
const API_URL = BASE_URL + 'api/';
import axios from 'axios';
class GlobalFormetAllData {
    logOutData() {
        return axios.post(API_URL + 'Login/logout');
    }
    LogoutStoreClear() {
        localStorage.removeItem('menuList');
        localStorage.clear();
        this.logOutData();
    }
}
export default new GlobalFormetAllData();
