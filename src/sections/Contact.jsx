import React, { useState } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailjs.send(
        'service_796fnnc', // Your EmailJS service ID
        'template_wuhtz7o', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'basantapakhrin360@gmail.com'
        },
        'wQAfGeYXuppZJdwQK' // Your EmailJS public key
      )
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact">
      <Container>
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:mingmardorjetamang17@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                    basantapakhrin360@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.43 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6 1.1 1.6 1.1 1 .7 2.5.5 3.1.4.1-.5.4-1 .8-1.3-2.5-.3-5-1.2-5-5.4 0-1.2.5-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9 1.8-.5 3.6-.5 5.4 0 2.1-1.2 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.6.8 1.1 1.8 1.1 3 0 4.2-2.5 5.1-5 5.4.4.4.7 1.1.7 2.1v2.5c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                  </svg>
                  <a href="https://github.com/Itsme-Mingmar" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    https://github.com/Itsme-Mingmar
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764S5.034 4.2 6 4.2s1.75.79 1.75 1.764S6.966 7.732 6 7.732zM20 20h-3v-5.604c0-1.337-.027-3.058-1.865-3.058-1.867 0-2.154 1.46-2.154 2.964V20h-3v-11h2.881v1.507h.041c.401-.761 1.379-1.563 2.839-1.563 3.036 0 3.598 2 3.598 4.604V20z" />
                  </svg>
                  <a href="https://linkedin.com/in/basanta-pakhrin/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    https://www.linkedin.com/in/basanta-pakhrin/
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="medium">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact