const endpoint = (id) => `https://summer-practice-api-476aeaf072ec.herokuapp.com/v1/users/${id}`

export const getFreak = (onSuccess, onFailure, id) => fetch(endpoint(id))
    .then(response => response.json())
    .then(json => onSuccess(json.data))
    .catch(error => onFailure(error))
