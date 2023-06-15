const nodemailer = require('nodemailer');

// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-password' // Replace with your Gmail password
  }
});

// Email content
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'customer-email@example.com', // Replace with the customer's email address
  subject: 'Order Confirmation',
  text: 'Thank you for your order! Your order has been confirmed.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
