const Product = require('../models/productSchema')

const creatProduct = async (req, res) => {
    try {
        const body = req.body
        const product = new Product(body)
        product.save()
        res.status(200).json({ message: "Product is created", product : product })
    }
    catch (err) {
        res.status(404).json(err)
    }
}
const getProduct = async (req, res) => {
    try {
        const productData = await Product.find()
        res.status(200).json({ message: "Product is fetch", product : productData })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        product.save()
        res.status(200).json({ message: "Product is deleted" })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(id, req.body)
        product.save()
        res.status(200).json({ message: "Product is Updated" })
    }
    catch (err) {
        res.status(404).json(err)
    }
}
module.exports = { creatProduct, getProduct, deleteProduct, updateProduct }