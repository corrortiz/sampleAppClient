import axios from 'axios';
axios.defaults.headers.contentType = 'application/json';

export const FETCH_USERS = 'FETCH_USERS';
export const SET_SINGLE_USER = 'SET_SINGLE_USER';
export const DELETE_USERS = 'DELETE_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';

/**
 * this is the default url to make the request to the server this have to change deppending of the location of the endpoint
 * @type {string}
 */
const ROOT_URL = `https://sample-api-aohys.herokuapp.com/api`;

export function fetchUsers() {
    const request = axios.get(`${ROOT_URL}/usersHospital`);

    return{
        type: FETCH_USERS,
        payload: request
    }
}

export function deleteUser(id) {
    const request = axios.delete(`${ROOT_URL}/usersHospital/${id}`);

    return{
        type: DELETE_USERS,
        payload: request
    }
}

export function createUser(props) {
    const request = axios.post(`${ROOT_URL}/usersHospital`, props);

    return{
        type: CREATE_USER,
        payload: request
    }
}

export function setSingleUser(user) {
    return{
        type: SET_SINGLE_USER,
        payload: user
    }
}

export function updateUser(props, id) {
    const request = axios.put(`${ROOT_URL}/usersHospital/${id}`, props);

    return{
        type: UPDATE_USER,
        payload: request
    }
}

export function fetchLike(searchTerm) {
    const request = axios.get(`${ROOT_URL}/usersHospital/search/${searchTerm}`);

    return{
        type: FETCH_USERS,
        payload: request
    }

}