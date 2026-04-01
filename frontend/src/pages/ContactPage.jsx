import { useState } from 'react'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields!')
      return
    }
    setSubmitted(true)
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 32px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>Contact Us</h1>
        <p style={{ fontSize: '18px', opacity: 0.9 }}>We would love to hear from you!</p>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '60px auto',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px'
      }}>

        {/* Left - Contact info */}
        <div>
          <h2 style={{ color: '#1a1a2e', marginBottom: '24px' }}>Get in Touch</h2>
          {[
            { label: 'Email', value: 'support@snapcart.com' },
            { label: 'Phone', value: '+91 98765 43210' },
            { label: 'Address', value: 'Coimbatore, Tamil Nadu, India' },
            { label: 'Working Hours', value: 'Mon - Sat, 9am - 6pm' }
          ].map(info => (
            <div key={info.label} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '4px' }}>{info.label}</p>
              <p style={{ color: '#555' }}>{info.value}</p>
            </div>
          ))}
        </div>

        {/* Right - Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '28px',
                color: 'white'
              }}>
                ✓
              </div>
              <h3 style={{ color: '#1a1a2e', marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ color: '#666' }}>We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 style={{ color: '#1a1a2e', marginBottom: '24px' }}>Send a Message</h2>
              {['name', 'email'].map(field => (
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
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#667eea'}
                    onBlur={e => e.target.style.borderColor = '#eee'}
                  />
                </div>
              ))}
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#555',
                  fontWeight: '500'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #eee',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                  onFocus={e => e.target.style.borderColor = '#667eea'}
                  onBlur={e => e.target.style.borderColor = '#eee'}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                Send Message
              </button>
            </>
          )}
        </div>
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
        <p style={{ color: '#666', fontSize: '14px' }}>2026 SnapCart. Built by Joshika.</p>
      </footer>

    </div>
  )
}

export default ContactPage