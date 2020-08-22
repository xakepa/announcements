import React, { useEffect, useState } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'

const App = (props) => {
  const [user, setUser] = useState(null)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    })
  }

  const logOut = () => {
    document.cookie = "jwt-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

    setUser({
      loggedIn: false
    })
  }

  useEffect(() => {
    const token = getCookie('jwt-token')

    if (!token) {
      logOut()
      return
    }

    fetch('http://localhost:8000/api/user/verify', {
      method: 'POST',
      body: JSON.stringify({
        token
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(promise => promise.json())
      .then(response => {
        console.log(response);
        if (response.status) {
          logIn({
            username: response.user.username,
            id: response.user._id
          })
        } else {
          console.log('ERROR');
          logOut()
        }
      })
  }, [])


  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App