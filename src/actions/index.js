export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_RESPONSE = 'GET_USER_RESPONSE';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_RESPONSE = 'GET_REPOS_RESPONSE';
export const GET_REPOS_ERROR = 'GET_REPOS_ERROR';

export default {
    getUser: (username) => ({type: GET_USER_REQUEST, username}),
    getUserResponse: (user) => ({type: GET_USER_RESPONSE, user}),
    getUserError: (error) => ({type: GET_USER_ERROR, error}),

    getReposRequest: (reposUrl) => ({type: GET_REPOS_REQUEST, reposUrl}),
    getReposResponse: (repos) => ({type: GET_REPOS_RESPONSE, repos}),
    getReposError: (error) => ({type: GET_REPOS_ERROR, error})

};