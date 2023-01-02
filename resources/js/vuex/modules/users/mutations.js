export default {
    ADD_ALL_USERS(state, users) {
        state.users = users
    },

    ADD_ONLINE_USERS(state, users) {
      state.onlineUsers = users  
    },

    ADD_ONLINE_USER(state, users) {
      state.onlineUsers.unshift()
    },

    REMOVE_ONLINE_USER(state, user) {
        state.onlineUsers = state.onlineUsers.filter(u => {
          return u.email != user.email
      })
    },
}