import axios from "axios";

export default {
    state: {
        userConversation: null,
        messages: [],
    },

    mutations: {
        ADD_USER_CONVERSATION(state, user) {
            state.userConversation = user;
        },

        REMOVE_USER_CONVERSATION(state, user) {
            state.userConversation = null;
        },

        ADD_USER_MESSAGES(state, message) {
            state.messages = message;
        },

        CLEAR_USER_MESSAGES(state, message) {
            state.messages = null;
        },
    },

    actions: {
        async getMessages({ state, commit }) {
            commit("CLEAR_USER_MESSAGES");

            return axios
                .get("/api/v1/messages/" + state.userConversation.id)
                .then((response) => {
                    commit("ADD_USER_MESSAGES", response.data.data);
                });
        },
    },
    getter: {},
};
