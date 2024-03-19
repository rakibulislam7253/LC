var initialState = { isPublicRoute: true };

export const route = {
    namespaced: true,
    state: initialState,
    actions: {
        checkRouteStatus({ commit }, currentRoute) {
            commit('checkRouteStatus', currentRoute);
            return Promise.resolve(this.state.route.isPublicRoute);
        }
    },
    mutations: {
        checkRouteStatus(state, currentRoute) {
            const publicRoutes = ['/login', '/forgot-password', '/login-preview'];
            var isPublicRoute = publicRoutes.includes(currentRoute);
            if (currentRoute.includes('/reset-password')) {
                isPublicRoute = true;
            }
            this.state.route.isPublicRoute = isPublicRoute;
        }
    }
};
