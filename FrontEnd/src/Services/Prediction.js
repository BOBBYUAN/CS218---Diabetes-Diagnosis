//SJSU CS 218 Spring 2021 TEAM3
import {ml_url} from '../Config/constants'
const axios = require('axios').default

export const predict = async (params)=>{
    const url = ml_url
    try {
        const response = await axios.post(url, params);
        return response.data
    } catch (error) {
        console.error(error);
    }
}