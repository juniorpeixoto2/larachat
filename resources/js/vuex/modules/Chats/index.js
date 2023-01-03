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

        ADD_USER_MESSAGE(state, message) {
            state.messages.push(message);
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
                    // console.log(response.data.data);
                    commit("ADD_USER_MESSAGES", response.data.data);
                });
        },

        async sendNewMessage({ state, commit }, message) {
            return axios
                .post("/api/v1/messages/create", {
                    message,
                    receiver_id: state.userConversation.id,
                })
                .then((response) => {
                    commit("ADD_USER_MESSAGE", {
                        message: message,
                        me: true,
                        receiver_id: state.userConversation.receiver_id,
                    });

                    // state.messages.push();
                });
        },
    },
    getter: {},
};
