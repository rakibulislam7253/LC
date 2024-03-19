import { createStore } from 'vuex';

import { auth } from './modules/auth';
import { route } from './modules/route';
import { loader } from './modules/loader';

export default createStore({
    modules: {
        auth,
        route,
        loader
    }
});
