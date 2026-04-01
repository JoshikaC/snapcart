import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartItems } = useCart()
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>Snap</span>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a2e' }}>Cart</span>
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#555', textDecoration: 'none', fontWeight: '500' }}>
          Products
        </Link>
        <Link to="/login" style={{ color: '#555', textDecoration: 'none', fontWeight: '500' }}>
          Login
        </Link>
        <Link to="/cart" style={{
          color: 'white',
          textDecoration: 'none',
          backgroundColor: '#667eea',
          padding: '10px 20px',
          borderRadius: '50px',
          fontWeight: '600'
        }}>
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar