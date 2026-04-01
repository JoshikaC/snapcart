import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected!')

    import('./routes/products.js').then(({ default: productRoutes }) => {
      app.use('/api/products', productRoutes)
    })

    import('./routes/auth.js').then(({ default: authRoutes }) => {
      app.use('/api/auth', authRoutes)
    })
  })
  .catch((err) => console.log('DB Error:', err))

app.get('/', (req, res) => {
  res.json({ message: 'SnapCart API is running' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))