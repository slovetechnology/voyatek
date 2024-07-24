import axios from "axios"

const BaseURL = process.env.NEXT_PUBLIC_API

export const getUrl = async (query) => {
    const response = await axios.get(`${BaseURL}${query ? `${query}` : ''}`)
    return response
}


export const postUrl = async (data) => {
    const response = await axios.post(`${BaseURL}`, data)
    return response
}

export const updateUrl = async (query, data) => {
    const response = await axios.put(`${BaseURL}${query ? `${query}` : ''}`, data)
    return response
}

export const deleteUrl = async (query) => {
    const response = await axios.delete(`${BaseURL}${query ? `${query}` : ''}`)
    return response
}