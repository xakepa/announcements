const authenticate = async (url, body, onSucces, onFail) => {

    try {
        const data = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = data.headers.get('Authorization')
        document.cookie = `jwt-token=${authToken}`

        const response = await data.json()


        if (response.email && authToken) {
            onSucces({
                email: response.email,
                id: response._id
            })
        } else {
            onFail()
        }

    } catch (error) {
        console.error(error)
    }
}

export default authenticate