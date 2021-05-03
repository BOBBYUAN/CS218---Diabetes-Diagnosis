//SJSU CS 218 Spring 2021 TEAM3
import {backend_url} from '../Config/constants'
const axios = require('axios').default

export const getPatient = async (id)=>{
    const url = backend_url + 'patient/' +id
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const setPatient = async (params)=>{
    const url = backend_url + 'patient'
    try {
        const response = await axios.post(url, params);
        return response
    } catch (error) {
        console.error(error);
    }
}