// import Vue from 'vue'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import users from './modules/users';

const store = new Vuex.Store({
    modules: {
        users,
    }
})

export default store