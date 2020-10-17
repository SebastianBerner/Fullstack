import axios from 'axios'

const baseUrl = 'https://fierce-anchorage-60216.herokuapp.com/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (deleteObject) => {
    const request = axios.delete(`${baseUrl}/${deleteObject.id}`)
    return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  remove: remove,
}