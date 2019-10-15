import { url } from './config';

/**
 * 
 * @returns {Array} - list todos
 */
export const getAll = () => {
    return fetch(url).then(response => response.json());
};

/**
 * Retrieve single todo
 * 
 * @param {number} id 
 */
export const getById = (id) => {
    return fetch(`${url}/${id}`).then(response => response.json());
};