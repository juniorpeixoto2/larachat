export default {

    sortedUsers(state) {

console.log(state.users.data)

        let users = state.users.data
        const onlineUsers = state.onlineUsers

        //sorted
        users = users.sort(user => {
            const index = onlineUsers.findIndex(u => u.email === user.email)
            
            return index === -1 ? 1 : -1;
        })
        

        //Map online
        users = users.map(user => {
            const index = onlineUsers.findIndex(u => u.email === user.email)

            user.online = index != -1
            
            return user;
        })

        return users;

    }
}