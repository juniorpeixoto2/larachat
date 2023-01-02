import store from "./vuex/store";
const user_id = window.Laravel.user;

// window.Echo.channel("larachat_database_private-chat.".user_id).listen(
//     "NewMessageCreated",
//     (e) => {
//         console.log(e.message);
//     }
// );

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
