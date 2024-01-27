/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { getToken } from "./Store"

const Authorization = ({landing, children}) => {
    const token = getToken()
    if (token) {
        if (landing) {
            return <Navigate to={"/dashboard"} />
        } else {
            return children
        }
    } else {
        if (landing) {
            return children
        } else {
            return <Navigate to={"/"} />
        }
    }
}

export default Authorization