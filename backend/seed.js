import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'

dotenv.config()

const products = [
  {
    name: 'Wireless Headphones',
    price: 1999,
    description: 'High quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics'
  },
  {
    name: 'Running Shoes',
    price: 2499,
    description: 'Comfortable running shoes for everyday use',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Footwear'
  },
  {
    name: 'Backpack',
    price: 1299,
    description: 'Spacious backpack perfect for college and travel',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Bags'
  },
  {
    name: 'Smart Watch',
    price: 3999,
    description: 'Feature packed smart watch with health tracking',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics'
  }
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected')
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Products added successfully!')
    process.exit()
  })
  .catch(err => console.log(err))