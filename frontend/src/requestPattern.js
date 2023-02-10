import axios from "axios"

export const sendRequest = axios.create({
    baseURL: 'http://localhost:5151/api/',
    headers: { 'x-access-token': localStorage.getItem("authToken") }
});