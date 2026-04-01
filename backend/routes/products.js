import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    console.log('Products route hit!')
    const products = await Product.find({})
    console.log('Products found:', products.length)
    res.status(200).json(products)
  } catch (error) {
    console.log('Products error:', error.message)
    res.status(500).json({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    console.log('Single product error:', error.message)
    res.status(500).json({ message: error.message })
  }
})

export default router