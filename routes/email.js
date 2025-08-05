const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const routes = express.Router();
const dotenv = require("dotenv");
const upload = multer();

dotenv.config({ override: true });
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

routes.post("/send-email", async (req, res) => {
  const { to, type, data } = req.body;

  if (!to || !type || !data) {
    return res.status(400).json({ error: "Missing field required" });
  }
  console.log(type);
  let saleEmailContent = `<h2>New Student Lead Notification</h2>

<p><strong>A new student lead has been submitted through the Careersure Academy website.</strong></p>

<table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
  <tr>
    <th align="left">Name</th>
    <td>${data.name}</td>
  </tr>
  <tr>
    <th align="left">Email</th>
    <td>${data.email}</td>
  </tr>
  <tr>
    <th align="left">Phone</th>
    <td>${data.mobile}</td>
  </tr>
  
  <tr>
    <th align="left">Status</th>
    <td>${data.status}</td>
  </tr>

  <tr>
    <th align="left">Status</th>
    <td>${new Date().toLocaleString()}</td>
  </tr>
</table>

<p>Please reach out to the lead as soon as possible.</p>

<p>Best Regards,<br>
Website Bot - Careersure Academy</p>`;

  let studentEmailContent = `<h2>Hello ${data.name},</h2>
          <p>Thank you for reaching out to <strong>Careersure Academy</strong>.</p>
          <p>We have received your application:</p>
          <p>Our team will get back to you shortly.</p>
          <hr />
          <p>Best regards,<br>Careersure Academy Team</p>
          <small>This is an automated message. Please do not reply.</small>
        `;

  let mentorEmailContent = `<h2>New Mentorship Lead Notification</h2>
  <p><strong>A new mentorship enquiry has been submitted via the Careersure Academy platform.</strong></p>
  <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
    <tr><th align="left">Full Name</th><td>${data.fullName}</td></tr>
    <tr><th align="left">Email</th><td><a href="mailto:${data.email}">${
    data.email
  }</a></td></tr>
    <tr><th align="left">Phone</th><td><a href="tel:${data.phone}">${
    data.phone
  }</a></td></tr>
    <tr><th align="left">Designation</th><td>${data.designation}</td></tr>
    <tr><th align="left">Current Company</th><td>${
      data.currentCompany
    }</td></tr>
    <tr><th align="left">Years of Experience</th><td>${
      data.experience
    }</td></tr>
    <tr><th align="left">Area of Expertise</th><td>${data.expertise}</td></tr>
    <tr><th align="left">LinkedIn Profile</th><td><a href="${
      data.linkedinProfile
    }" target="_blank">View Profile</a></td></tr>
    <tr><th align="left">Resume</th><td><a href="${
      data.resumeLink
    }" target="_blank">Download Resume</a></td></tr>
    <tr><th align="left">Message</th><td>${
      data.message || "(No message submitted)"
    }</td></tr>
    <tr><th align="left">Submitted At</th><td>${new Date(
      data.submittedAt
    ).toLocaleString()}</td></tr>
  </table>
  <p>Please reach out to the lead as soon as possible to qualify and engage.</p>
  <p>Regards,<br>Careersure Academy Website Bot</p>`;

  let studentEmailSubject = "Thank you for contacting Careersure Academy!";
  let saleEmailSubject = "New Lead Generated for CareerSure Academy!";
  let mentorEmailSubject = `🧑‍💼 New Mentorship Lead: ${data.fullName} - MERN Developer`;

  let emailContent;
  let emailSubject;

  switch (type) {
    case "ADMIN_NOTIFICATION":
      emailContent = saleEmailContent;
      emailSubject = saleEmailSubject;
      break;
    case "MENTOR_APPLICATION":
      emailContent = mentorEmailContent;
      emailSubject = mentorEmailSubject;
      break;
    case "USER_CONFIRMATION":
      emailContent = studentEmailContent;
      emailSubject = studentEmailSubject;
      break;
  }

  //   let emailContent =
  //     type == "ADMIN_NOTIFICATION" ? saleEmailContent : studentEmailContent;
  //   let emailSubject =
  //     type == "ADMIN_NOTIFICATION" ? saleEmailSubject : studentEmailSubject;

  const studentEmail = {
    from: process.env.EMAIL_USER,
    to,
    subject: `${emailSubject}`,
    html: emailContent,
  };

  try {
    const info = await transport.sendMail(studentEmail);
    res.json({ success: true, message: info.messageId });
    res.status(200).json({ message: "successFully Send" });
  } catch (error) {
    res.json(`${mailOption}`);
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = routes;
