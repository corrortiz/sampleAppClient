import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USERS = 'DELETE_USERS';

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