import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const dummyProducts = [
  {
    _id: '1',
    name: 'Wireless Headphones',
    price: 1999,
    description: 'High quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics'
  },
  {
    _id: '2',
    name: 'Running Shoes',
    price: 2499,
    description: 'Comfortable running shoes for everyday use',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Footwear'
  },
  {
    _id: '3',
    name: 'Backpack',
    price: 1299,
    description: 'Spacious backpack perfect for college and travel',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Bags'
  },
  {
    _id: '4',
    name: 'Smart Watch',
    price: 3999,
    description: 'Feature packed smart watch with health tracking',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics'
  },
  {
    _id: '5',
    name: 'Sunglasses',
    price: 899,
    description: 'Stylish UV protection sunglasses for all occasions',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    category: 'Accessories'
  },
  {
    _id: '6',
    name: 'Water Bottle',
    price: 499,
    description: 'Insulated steel water bottle keeps drinks cold for 24 hours',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    category: 'Accessories'
  }
]

const categories = ['All', 'Electronics', 'Footwear', 'Bags', 'Accessories']

function ProductsPage() {
  const { addToCart } = useCart()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [added, setAdded] = useState({})
  const [products, setProducts] = useState(dummyProducts)

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log('Using dummy data:', err))
  }, [])

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory
    return matchSearch && matchCategory
  })

  const handleAddToCart = (product) => {
    addToCart(product)
    setAdded(prev => ({ ...prev, [product._id]: true }))
    setTimeout(() => {
      setAdded(prev => ({ ...prev, [product._id]: false }))
    }, 1500)
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '48px 32px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>Discover Amazing Products</h1>
        <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '24px' }}>Find everything you need at the best prices</p>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '14px 20px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        />
      </div>

      <div style={{ padding: '32px' }}>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                border: '2px solid #667eea',
                backgroundColor: selectedCategory === cat ? '#667eea' : 'white',
                color: selectedCategory === cat ? 'white' : '#667eea',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <p style={{ color: '#666', marginBottom: '20px' }}>{filtered.length} products found</p>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
            <h3>No products found</h3>
            <p>Try a different search or category</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            {filtered.map(product => (
              <div key={product._id} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {product.category}
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: '18px', color: '#1a1a2e' }}>{product.name}</h3>
                  <p style={{ color: '#888', fontSize: '14px', margin: '0 0 16px', lineHeight: '1.5' }}>{product.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#667eea' }}>Rs. {product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: added[product._id] ? '#28a745' : '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '14px',
                        transition: 'background-color 0.3s'
                      }}
                    >
                      {added[product._id] ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a2e',
        color: 'white',
        padding: '40px 32px',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '8px', color: '#667eea' }}>SnapCart</h2>
        <p style={{ color: '#aaa', marginBottom: '16px' }}>Your one stop shop for everything</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '24px' }}>
          <Link to="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</Link>
          <Link to="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</Link>
        </div>
        <p style={{ color: '#666', fontSize: '14px' }}>2026 SnapCart. Built by Joshika.</p>
      </footer>

    </div>
  )
}

export default ProductsPage