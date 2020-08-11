import React, { useEffect, useState } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'

const App = (props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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
    console.log(token);

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
    }).then(promise => {
      console.log(promise)
      return promise.json()
    }).then(response => {
      if (response.status) {
        logIn({
          username: response.user.username,
          id: response.user._id
        })
      } else {
        logOut()
      }
      setLoading(false)
    })
  }, [])

  // if (loading) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }

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