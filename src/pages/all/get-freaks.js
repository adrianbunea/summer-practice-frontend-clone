const endpoint = 'https://summer-practice-api-476aeaf072ec.herokuapp.com/v1/users'

export const getFreaks = (onSuccess, onFailure) => fetch(endpoint)
    .then(response => response.json())
    .then(json => onSuccess(json.data))
    .catch(error => onFailure(error))
