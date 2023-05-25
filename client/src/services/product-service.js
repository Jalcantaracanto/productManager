import axios from 'axios'

export const createProduct = (product) => axios.post('http://localhost:8080/api/product/new', product)

export const getProducts = () => axios.get('http://localhost:8080/api/products')

export const getProduct = (id) => axios.get(`http://localhost:8080/api/product/${id}`)

export const updateProduct = (id, product) => axios.put(`http://localhost:8080/api/product/update/${id}`, product)

export const deleteProduct = (id) => axios.delete(`http://localhost:8080/api/product/delete/${id}`)