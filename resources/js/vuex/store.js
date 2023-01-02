// import Vue from 'vue'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import users from "./modules/users";
import chats from "./modules/Chats";

const store = new Vuex.Store({
    modules: {
        users,
        chats,
    },
});

export default store;
