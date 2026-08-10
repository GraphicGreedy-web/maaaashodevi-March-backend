import axios from "axios"
export const api = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true
})
export const getAllTours = () => api.get("/api/tours")
export const submitContactRoute = (data) => api.post("/api/contacts", data)
export const getContactStatusRoute = (contactId) => api.get(`/api/contacts/${contactId}/status`)
export const getReviewsRoute = () => api.get("/api/reviews")
export const submitReviewRoute = (data) => api.post("/api/reviews", data)
