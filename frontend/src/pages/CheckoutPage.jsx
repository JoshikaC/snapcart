import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function CheckoutPage() {
  const { cartItems, totalPrice, setCartItems } = useCart()
  const navigate = useNavigate()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleOrder = () => {
    if (!form.name || !form.email || !form.address || !form.city || !form.pincode) {
      alert('Please fill all fields!')
      return
    }
    setOrderPlaced(true)
    setCartItems([])
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h2>Your cart is empty!</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '16px',
            padding: '12px 24px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Go Shopping
        </button>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '80px',
        padding: '32px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#28a745',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '36px',
          color: 'white'
        }}>
          ✓
        </div>
        <h1 style={{ color: '#1a1a2e', marginBottom: '12px' }}>Order Placed Successfully!</h1>
        <p style={{ color: '#666', marginBottom: '8px' }}>Thank you {form.name}! Your order is confirmed.</p>
        <p style={{ color: '#666', marginBottom: '32px' }}>We will deliver to {form.address}, {form.city} - {form.pincode}</p>
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '400px',
          margin: '0 auto 32px'
        }}>
          <h3 style={{ marginBottom: '16px', color: '#1a1a2e' }}>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item._id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              color: '#555'
            }}>
              <span>{item.name} x {item.qty}</span>
              <span>Rs. {item.price * item.qty}</span>
            </div>
          ))}
          <div style={{
            borderTop: '2px solid #ddd',
            paddingTop: '12px',
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            <span>Total</span>
            <span style={{ color: '#667eea' }}>Rs. {totalPrice}</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 32px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px'
    }}>

      {/* Left - Form */}
      <div>
        <h2 style={{ marginBottom: '24px', color: '#1a1a2e' }}>Delivery Details</h2>

        {['name', 'email', 'address', 'city', 'pincode'].map(field => (
          <div key={field} style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              color: '#555',
              fontWeight: '500',
              textTransform: 'capitalize'
            }}>
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #eee',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#667eea'}
              onBlur={e => e.target.style.borderColor = '#eee'}
            />
          </div>
        ))}

        <button
          onClick={handleOrder}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '8px'
          }}
        >
          Place Order
        </button>
      </div>

      {/* Right - Order summary */}
      <div>
        <h2 style={{ marginBottom: '24px', color: '#1a1a2e' }}>Order Summary</h2>
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '16px',
          padding: '24px'
        }}>
          {cartItems.map(item => (
            <div key={item._id} style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '16px',
              paddingBottom: '16px',
              borderBottom: '1px solid #eee'
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: '600', color: '#1a1a2e', margin: '0 0 4px' }}>{item.name}</p>
                <p style={{ color: '#888', margin: '0', fontSize: '14px' }}>Qty: {item.qty}</p>
              </div>
              <p style={{ fontWeight: '600', color: '#667eea' }}>Rs. {item.price * item.qty}</p>
            </div>
          ))}

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
            color: '#555'
          }}>
            <span>Subtotal</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
            color: '#555'
          }}>
            <span>Delivery</span>
            <span style={{ color: '#28a745' }}>Free</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 0 0',
            borderTop: '2px solid #ddd',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            <span>Total</span>
            <span style={{ color: '#667eea' }}>Rs. {totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage