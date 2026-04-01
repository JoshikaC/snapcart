import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function CartPage() {
  const { cartItems, removeFromCart, totalPrice } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h2>Your cart is empty!</h2>
        <p style={{ color: '#666' }}>Go add some products first.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Your Cart</h1>

      {cartItems.map(item => (
        <div key={item._id} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '12px',
          marginBottom: '16px'
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 4px' }}>{item.name}</h3>
            <p style={{ color: '#666', margin: '0 0 4px' }}>Rs. {item.price}</p>
            <p style={{ color: '#333', margin: 0 }}>Quantity: {item.qty}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
              Rs. {item.price * item.qty}
            </p>
            <button
              onClick={() => removeFromCart(item._id)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#e94560',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{
        borderTop: '2px solid #ddd',
        paddingTop: '16px',
        textAlign: 'right'
      }}>
        <h2>Total: Rs. {totalPrice}</h2>
        <button
          onClick={() => navigate('/checkout')}
          style={{
            padding: '12px 32px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage