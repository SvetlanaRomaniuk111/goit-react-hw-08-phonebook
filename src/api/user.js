import { authHostInsance, baseHostInstance } from "api"

export const login = async (formData) => {
    const { data } = await baseHostInstance.post('users/login', formData)
    localStorage.setItem('token', data.token)
    return data
}

export const registrate = async (formData) => {
    const { data } = await baseHostInstance.post('users/signup', formData)
    localStorage.setItem('token', data.token)
    return data
}


export const logout = async () => {
    const { data } = await authHostInsance.post('users/logout')
    localStorage.setItem('token', '')
    return data
}

export const auth = async () => {
    const { data } = await authHostInsance.get('users/current')
    return data
}