const axios = require('axios')

function useUser() {
    const url = "http://localhost:8000/api/users"
    const userData = ([])
    const error = (null)

    const getAllUser = async () => {
        userData.value = []
        error.value = null
        try {
            const res = await axios(url)
            userData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    return {
        userData,
        error,
        getAllUser,
    }
}

module.exports = useUser