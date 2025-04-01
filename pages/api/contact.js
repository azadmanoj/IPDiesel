import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject, phone } = req.body;

    // Create a transporter using Gmail's SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // This tells Nodemailer to use Gmail's SMTP server
      auth: {
        user: 'manuazad6@gmail.com',  // Replace with your Gmail email address
        pass: 'ggxq jsnp gquc eumq',     // Use the app password generated above
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,   // Sender's email address
      to: 'manoj.a@cisinlabs.com', // Replace with the recipient's email
      subject: `New message from ${name} - ${subject}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  // For any other HTTP methods, return a 405 error
  res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
