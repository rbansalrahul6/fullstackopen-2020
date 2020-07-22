import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(resp => resp.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(resp => resp.data)
}

export default { getAll, create }