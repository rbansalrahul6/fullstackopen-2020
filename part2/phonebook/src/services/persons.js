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

const update = (newPerson) => {
    const request = axios.put(`${baseUrl}/${newPerson.id}`, newPerson)
    return request.then(resp => resp.data)
}

const deletePerson = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, deletePerson, update }
