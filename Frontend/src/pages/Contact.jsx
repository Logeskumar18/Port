import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    if(!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    if(!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      // Example backend API request:
      // Adjust URL and payload as per your backend API spec
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #182636 0%, #203a43 50%, #2c5364 100%)',
        color: '#f4f8fb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#00bcd4', letterSpacing: '1px' }}>
          Contact Me
        </h2>

        {submitted && (
          <div className="alert alert-success" role="alert" tabIndex={-1}>
            Thank you for your message! I will get back to you soon.
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert" tabIndex={-1}>
            {error}
          </div>
        )}

        <div className="card p-4 shadow-lg" style={{ borderRadius: '1rem', backgroundColor: '#223043' }}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="form-label" style={{ color: '#00bcd4' }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                style={{
                  backgroundColor: '#2c3a4d',
                  borderColor: '#00bcd4',
                  color: '#f4f8fb'
                }}
                onFocus={e => e.target.style.boxShadow = '0 0 8px #00bcd4'}
                onBlur={e => e.target.style.boxShadow = 'none'}
                disabled={loading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label" style={{ color: '#00bcd4' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                style={{
                  backgroundColor: '#2c3a4d',
                  borderColor: '#00bcd4',
                  color: '#f4f8fb'
                }}
                onFocus={e => e.target.style.boxShadow = '0 0 8px #00bcd4'}
                onBlur={e => e.target.style.boxShadow = 'none'}
                disabled={loading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label" style={{ color: '#00bcd4' }}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here"
                style={{
                  backgroundColor: '#2c3a4d',
                  borderColor: '#00bcd4',
                  color: '#f4f8fb'
                }}
                onFocus={e => e.target.style.boxShadow = '0 0 8px #00bcd4'}
                onBlur={e => e.target.style.boxShadow = 'none'}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg w-100"
              disabled={loading}
              style={{
                backgroundColor: '#00bcd4',
                color: '#182636',
                fontWeight: '700',
                borderRadius: '0.8rem',
                boxShadow: '0 0 20px #00bcd4',
                transition: 'background-color 0.3s, box-shadow 0.3s',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#00e5ff';
                  e.currentTarget.style.boxShadow = '0 0 30px #00e5ff';
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#00bcd4';
                  e.currentTarget.style.boxShadow = '0 0 20px #00bcd4';
                }
              }}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>

          <div className="mt-5 text-center" style={{ color: '#a0c4c9' }}>
            <p>
              📧 <a href="mailto:logeskumar@example.com" style={{ color: '#00bcd4' }}>logeskumar@example.com</a>
            </p>
            <p>
              🌐{' '}
              <a href="https://linkedin.com/in/logeskumar" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>
                LinkedIn
              </a>{' '}
              |{' '}
              <a href="https://github.com/logeskumar" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>
                GitHub
              </a>{' '}
              |{' '}
              <a href="https://twitter.com/logeskumar" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>
                X
              </a>{' '}
              |{' '}
              <a href="https://instagram.com/logeskumar" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>
                Instagram
              </a>
            </p>
            <p>📍 Chennai, India</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 575.98px) {
          #contact form .form-control, #contact form textarea {
            font-size: 1rem;
          }
          #contact button {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
