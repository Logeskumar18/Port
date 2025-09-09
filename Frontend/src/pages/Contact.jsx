import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Construct mailto URL
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:logeskumarr2004@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #182636 0%, #203a43 50%, #2c5364 100%)',
        color: '#f4f8fb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <h2 style={{ color: '#00bcd4', textAlign: 'center', marginBottom: '2rem' }}>
          Contact Me
        </h2>
        {error && (
          <div style={{
            background: '#c00',
            color: '#fff',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '6px'
          }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}
          style={{
            background: '#223043',
            padding: '2rem',
            borderRadius: '1rem'
          }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ color: '#00bcd4' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#2c3a4d',
                border: '1px solid #00bcd4',
                color: '#f4f8fb',
                borderRadius: '0.5rem',
                marginTop: '0.5rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ color: '#00bcd4' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#2c3a4d',
                border: '1px solid #00bcd4',
                color: '#f4f8fb',
                borderRadius: '0.5rem',
                marginTop: '0.5rem'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{ color: '#00bcd4' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#2c3a4d',
                border: '1px solid #00bcd4',
                color: '#f4f8fb',
                borderRadius: '0.5rem',
                marginTop: '0.5rem'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#00bcd4',
              color: '#182636',
              padding: '1rem',
              borderRadius: '0.8rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </form>

        {/* Social and contact info section at the bottom */}
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#a0c4c9' }}>
          <p>
            <FaEnvelope style={{ color: '#00bcd4', marginRight: '8px' }} />
            <a href="mailto:logeskumar@example.com" style={{ color: '#00bcd4' }}>logeskumar@example.com</a>
          </p>
          <p>
            <a href="https://linkedin.com/in/logeskumar" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: '#00bcd4', margin: '0 10px', fontSize: '24px' }} />
            </a>
            <a href="https://github.com/logeskumar" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ color: '#00bcd4', margin: '0 10px', fontSize: '24px' }} />
            </a>
            <a href="https://twitter.com/logeskumar" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ color: '#00bcd4', margin: '0 10px', fontSize: '24px' }} />
            </a>
            <a href="https://instagram.com/logeskumar" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ color: '#00bcd4', margin: '0 10px', fontSize: '24px' }} />
            </a>
          </p>
          <p>📍 Chennai, India</p>
        </div>
      </div>
    </section>
  );
}
