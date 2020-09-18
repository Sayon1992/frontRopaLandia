import axios from 'axios'

export const ApiGeneral = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})