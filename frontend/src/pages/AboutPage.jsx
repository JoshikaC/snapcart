function AboutPage() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 32px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>About SnapCart</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          We are on a mission to make online shopping simple, fast and affordable for everyone.
        </p>
      </div>

      {/* Mission */}
      <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {[
            { title: 'Our Mission', desc: 'To provide the best products at the lowest prices with the fastest delivery.' },
            { title: 'Our Vision', desc: 'To become the most trusted e-commerce platform in India.' },
            { title: 'Our Values', desc: 'Honesty, quality, and customer satisfaction are at the heart of everything we do.' }
          ].map(item => (
            <div key={item.title} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '24px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '60px'
        }}>
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '500+', label: 'Products' },
            { number: '50+', label: 'Brands' },
            { number: '4.8', label: 'App Rating' }
          ].map(stat => (
            <div key={stat.label}>
              <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.number}</h2>
              <p style={{ opacity: 0.9 }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 style={{ textAlign: 'center', marginBottom: '32px', color: '#1a1a2e' }}>Meet the Team</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {[
            { name: 'Joshika', role: 'Founder & Developer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
            { name: 'Rahul', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
            { name: 'Priya', role: 'UI Designer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200' }
          ].map(member => (
            <div key={member.name} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
              />
              <h4 style={{ color: '#1a1a2e', marginBottom: '4px' }}>{member.name}</h4>
              <p style={{ color: '#667eea', fontSize: '14px' }}>{member.role}</p>
            </div>
          ))}
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

export default AboutPage