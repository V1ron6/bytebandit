import './styles/contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const hasEmptyField = Object.values(formData).some((value) => !value.trim());
    if (hasEmptyField) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      const mailSubject = encodeURIComponent(formData.subject);
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );

      window.location.href = `mailto:mindedbusines@gmail.com?subject=${mailSubject}&body=${mailBody}`;
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="section contact-wrap" id="contact">
      <p className="eyebrow">Let&apos;s Build</p>
      <h2>Let&apos;s Work Together</h2>
      <p className="contact-copy">Get In Touch to discuss secure products, audits, and collaboration.</p>
      <a className="contact-cta" href="mailto:mindedbusines@gmail.com">
        Start a Conversation
      </a>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="status-line" aria-live="polite">
          {status === 'loading' ? 'Preparing your email...' : null}
          {status === 'success' ? 'Email app opened. I will reply soon.' : null}
          {status === 'error' ? 'Please complete all fields before sending.' : null}
        </div>

        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="e.g. viron@gmail.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            rows="5"
            placeholder="Write your message here..."
            required
          />
        </div>

        <div className="form-field submit-line">
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
