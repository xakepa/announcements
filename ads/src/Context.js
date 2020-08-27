import React from 'react'

const UserContext = React.createContext({
    email: null,
    user: null,
    logIn() { },
    logOut() { }
})

export default UserContext