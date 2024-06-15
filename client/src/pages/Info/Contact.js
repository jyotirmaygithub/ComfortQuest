import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form data to backend
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <Box
    className="mt-32 m-5"
      sx={{
        padding: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Your Email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
