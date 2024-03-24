import UserService from '../../service/user.service';

const AccessToken = localStorage.getItem('accessToken');
export const auth = {
    namespaced: true,
    state: {
        loggedIn: !!AccessToken,
        clickByMenu: null,
        UserData: null,
        setMenuList: [],
        setModuleInfo: [],
        editMenu: [],
        userid: '',
        module_setting: '',
        userDesignationPermission: '',
        userDepPermission: '',
        setBranchData: [],
        userLoginInfo: localStorage.getItem('user') || null
    },
    getters: {
        getSessionUser: (state) => {
            return state.UserData;
        }
    },
    actions: {
        login({ commit }, userObj) {
            commit('loginSuccess', userObj);
        },
        clickMenu({ commit }, userObj) {
            commit('clickMenu', userObj);
        },
        userid({ commit }, userObj) {
            commit('useridSuccess', userObj);
        },
        editMenu({ commit }, editObj) {
            commit('editMenu', editObj);
        },
        setMenuList({ commit }, menuObj) {
            commit('setMenuList', menuObj);
        },
        module_setting({ commit }, module_setting) {
            commit('module_setting', module_setting);
        },
        setModuleInfo({ commit }, menuObj) {
            commit('setModuleInfo', menuObj);
        },
        userDesignationPermission({ commit }, permission) {
            commit('userDesignationPermission', permission);
        },
        userDepPermission({ commit }, permission) {
            commit('userDepPermission', permission);
        },
        logout({ commit }) {
            commit('logout');
        },
        setBranchData({ commit }, branchData) {
            commit('setBranchData', branchData);
        },
        fetchCurrentUserInformation({ commit }) {
            return UserService.getCurrentUserData().then(
                (response) => {
                    if (response != null) {
                        commit('setUserData', response.data);
                    } else {
                        commit('logout');
                    }
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('logout');
                    return Promise.resolve(error);
                }
            );
        },
        refreshSessionUser({ commit }, User) {
            commit('refreshSessionUser', User);
        },
        refreshAccessToken({ commit }, AccessToken) {
            commit('refreshAccessToken', AccessToken);
        }
    },
    mutations: {
        loginSuccess(state, userObj) {
            state.loggedIn = true;
            state.UserData = userObj;
            localStorage.setItem('accessToken', userObj.jwt);
            localStorage.setItem('user', JSON.stringify(userObj));
        },
        useridSuccess(state, userObj) {
            state.userid = userObj;
        },

        editMenu(state, editObj) {
            state.editMenu = editObj;
        },
        module_setting(state, module_setting) {
            state.module_setting = module_setting;
        },
        userDesignationPermission(state, permission) {
            state.userDesignationPermission = permission;
        },
        clickMenu(state, permission) {
            state.clickMenu = permission;
        },
        userDepPermission(state, permission) {
            state.userDepPermission = permission;
        },
        setMenuList(state, menuObj) {
            state.setMenuList = menuObj;
            // if (state.setMenuList == null) {
            //   state.setMenuList = localStorage.getItem("Menulist") || null;
            // }
        },
        setModuleInfo(state, moduleObj) {
            state.setModuleInfo = moduleObj;
            localStorage.setItem('module_id', moduleObj[0].module_id);
            localStorage.removeItem('userid1');
        },
        setPermissions(state, Permissions) {
            state.Permissions = Permissions;
        },
        setPrivilegeIds(state, PrivilegeIds) {
            state.PrivilegeIds = PrivilegeIds;
        },
        setBrandingInformation(state, brandingInformation) {
            state.brandingInformation = brandingInformation;
        },
        setUserData(state, userData) {
            state.UserData = userData;
            state.loggedIn = true;
        },
        setBranchData(state, branchData) {
            state.setBranchData = branchData;
        },
        logout(state) {
            state.UserData = null;
            state.loggedIn = false;
            state.Permissions = [];
            localStorage.clear();
        },
        refreshSessionUser(state, User) {
            if (state.UserData) {
                state.UserData = User;
                state.loggedIn = true;
            }
        },
        refreshAccessToken(state, AccessToken) {
            localStorage.setItem('accessToken', AccessToken);
            state.loggedIn = true;
        }
    }
};
