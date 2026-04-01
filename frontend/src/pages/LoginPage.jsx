import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setLoading(true)
    setMessage('')
    try {
      if (isRegister) {
        const res = await axios.post('http://localhost:5000/api/auth/register', {
          name, email, password
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.name)
        setIsSuccess(true)
        setMessage(`Welcome ${res.data.name}! Registration successful.`)
        setTimeout(() => navigate('/'), 2000)
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email, password
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.name)
        setIsSuccess(true)
        setMessage(`Welcome back ${res.data.name}!`)
        setTimeout(() => navigate('/'), 2000)
      }
    } catch (err) {
      setIsSuccess(false)
      setMessage(err.response?.data?.message || 'Something went wrong')
    }
    setLoading(false)
  }

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
      }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ color: '#667eea', fontSize: '28px', marginBottom: '4px' }}>SnapCart</h1>
          <h2 style={{ color: '#1a1a2e', fontSize: '20px', marginBottom: '8px' }}>
            {isRegister ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p style={{ color: '#888', fontSize: '14px' }}>
            {isRegister ? 'Sign up to start shopping' : 'Login to your account'}
          </p>
        </div>

        {/* Name field - only for register */}
        {isRegister && (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontWeight: '500' }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '2px solid #eee',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={e => e.target.style.borderColor = '#667eea'}
              onBlur={e => e.target.style.borderColor = '#eee'}
            />
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontWeight: '500' }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '10px',
              border: '2px solid #eee',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            onFocus={e => e.target.style.borderColor = '#667eea'}
            onBlur={e => e.target.style.borderColor = '#eee'}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontWeight: '500' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '10px',
              border: '2px solid #eee',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            onFocus={e => e.target.style.borderColor = '#667eea'}
            onBlur={e => e.target.style.borderColor = '#eee'}
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: loading ? '#aaa' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '16px'
          }}
        >
          {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Login'}
        </button>

        {/* Message */}
        {message && (
          <p style={{
            textAlign: 'center',
            color: isSuccess ? '#28a745' : '#e94560',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            {message}
          </p>
        )}

        {/* Toggle */}
        <p
          onClick={() => { setIsRegister(!isRegister); setMessage('') }}
          style={{ textAlign: 'center', cursor: 'pointer', color: '#667eea', fontWeight: '500' }}
        >
          {isRegister ? 'Already have an account? Login' : 'No account? Register here'}
        </p>
      </div>
    </div>
  )
}

export default LoginPage