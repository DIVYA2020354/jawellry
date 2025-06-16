// NewsletterSignup.jsx
import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Real app: send email to server
    setMessage('Thank you for subscribing!');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Subscribe to our newsletter:</label><br />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default NewsletterSignup;
