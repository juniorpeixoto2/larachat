import store from "./vuex/store";
import Vue from "vue";
const user_id = window.Laravel.user;

window.Echo.channel("larachat_database_private-chat." + user_id).listen(
    "NewMessageCreated",
    (e) => {
        let chat = e.message;

        console.log(chat.sender_id);
        console.log(store.state.chats);

        Vue.$vToastify.success(
            e.message.message + " - " + chat.sender_id,
            "Nova Mensagem de " + chat.sender_id
        );

        if (
            store.state.chats.userConversation != null &&
            store.state.chats.userConversation.id == chat.sender_id
        ) {
            chat.me = false;
            store.state.chats.messages.push(chat);
        }
    }
);

window.Echo.join("larachat_database_chatroom")
    .here((users) => {
        // console.log("Usuarios Online:");
        // console.log(users);

        store.commit("ADD_ONLINE_USERS", users);
    })
    .joining((user) => {
        // console.log("Entrou:");
        // console.log(user);

        store.commit("ADD_ONLINE_USER", user);
    })
    .leaving((user) => {
        // console.log("Saiu:");
        // console.log(user);

        store.commit("REMOVE_ONLINE_USER", user);
    });
