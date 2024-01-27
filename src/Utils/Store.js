export const getToken = () => {
    return localStorage.getItem("__access_key__")
}

export const setToken = (token) => {
    return localStorage.setItem("__access_key__", token)
}

export const removeToken = () => {
    return localStorage.removeItem("__access_key__")
}