const express = require('express')
const { getProduct, creatProduct, deleteProduct, updateProduct } = require('../controller/productController')
const routes = express.Router()

routes.post('/', creatProduct)
routes.get('/', getProduct)
routes.delete('/:id', deleteProduct)
routes.patch('/:id', updateProduct)

module.exports = routes