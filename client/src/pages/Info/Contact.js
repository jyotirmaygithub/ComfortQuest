import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircleProgress from "../../components/progress/circle";
import MyStyledTextField from "../../components/myStyledTextField";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    setLoader(true);
    console.log("contact = ", formData);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/nodemailer/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <Box
      className="mt-32 m-5"
      sx={{
        padding: 4,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>

      {/* <form onSubmit={handleSubmit}> */}
      <MyStyledTextField
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
      <MyStyledTextField
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
      <MyStyledTextField
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
      <Button
        type="submit"
        fullWidth
        onClick={handleSubmit}
        variant="contained"
        disabled={loader}
      >
        {loader ? <CircleProgress color="#60A5FA" /> : <>Send Message</>}
      </Button>
      {/* </form> */}
      <ToastContainer />
    </Box>
  );
};

export default ContactPage;
