import axios from 'axios'

export const register = newUser =>{
    return axios.post('functions/register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
    }).then(res => {
        console.log(res)
    })
}

export const login = user => {
    return axios.post('functions/login', {
        username: user.username,
        password: user.password
    }).then(res => {
        localStorage.setItem('usertoken', res.data)
        localStorage.setItem('username', user.username)
        return res.data
    }).catch(err => {
        console.log(err)
    })
}