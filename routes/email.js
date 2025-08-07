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
  //   let saleEmailContent = `<h2>New Student Lead Notification</h2>

  // <p><strong>A new student lead has been submitted through the Careersure Academy website.</strong></p>

  // <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
  //   <tr>
  //     <th align="left">Name</th>
  //     <td>${data.name}</td>
  //   </tr>
  //   <tr>
  //     <th align="left">Email</th>
  //     <td>${data.email}</td>
  //   </tr>
  //   <tr>
  //     <th align="left">Phone</th>
  //     <td>${data.mobile}</td>
  //   </tr>

  //   <tr>
  //     <th align="left">Status</th>
  //     <td>${data.status}</td>
  //   </tr>

  //   <tr>
  //     <th align="left">Status</th>
  //     <td>${new Date().toLocaleString()}</td>
  //   </tr>
  // </table>

  // <p>Please reach out to the lead as soon as possible.</p>

  // <p>Best Regards,<br>
  // Website Bot - Careersure Academy</p>`;

  let saleEmailContent = `<div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: Arial, sans-serif;">

  <!-- Header -->
  <div style="background-color: #003366; color: #ffffff; padding: 15px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
    <h2 style="margin: 0; font-size: 22px;">New Student Lead Notification</h2>
  </div>

  <p style="font-size: 15px; color: #444444; margin-bottom: 25px;">
    <strong>A new student lead has been submitted through the Careersure Academy website.</strong>
  </p>

  <!-- Info Card -->
  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; color: #003366;">Name</div>
    <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
      data.name
    }</div>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; color: #003366;">Email</div>
    <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
      data.email
    }</div>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; color: #003366;">Phone</div>
    <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
      data.mobile
    }</div>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; color: #003366;">Status</div>
    <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
      data.status
    }</div>
  </div>

  <div style="margin-bottom: 30px;">
    <div style="font-weight: bold; color: #003366;">Submitted At</div>
    <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${new Date().toLocaleString()}</div>
  </div>

  <p style="font-size: 14px; color: #444;">
    📞 Please reach out to the lead as soon as possible.
  </p>

  <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;" />

  <p style="font-size: 14px; color: #555;">
    Best Regards,<br/>
    <strong>Careersure Academy</strong>
  </p>
</div>
`;

  // let studentEmailContent = `<h2>Hello ${data.name},</h2>
  //         <p>Thank you for reaching out to <strong>Careersure Academy</strong>.</p>
  //         <p>We have received your application:</p>
  //         <p>Our team will get back to you shortly.</p>
  //         <hr />
  //         <p>Best regards,<br>Careersure Academy Team</p>
  //         <small>This is an automated message. Please do not reply.</small>
  //       `;

  let studentEmailContent = `<div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: Arial, sans-serif; overflow: hidden;">

  <!-- Header -->
  <div style="background-color: #003366; color: #ffffff; padding: 20px 30px;">
    <h2 style="margin: 0;">Hello ${data.name},</h2>
  </div>

  <!-- Body -->
  <div style="padding: 30px; background-color: #f9f9f9;">
    <p style="font-size: 16px; color: #333;">
      Thank you for reaching out to <strong>Careersure Academy</strong>.
    </p>

    <!-- Highlight box -->
    <div style="background-color: #e0f3ff; padding: 15px 20px; border-left: 4px solid #0077cc; margin: 20px 0; border-radius: 6px;">
      <p style="margin: 0; font-size: 15px; color: #004d80;">
        We have successfully received your application.<br />
        Our team will get back to you shortly.
      </p>
    </div>

    <p style="font-size: 14px; color: #555;">
      If you have any questions in the meantime, feel free to reply to this email or visit our website.
    </p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <!-- Footer -->
    <p style="font-size: 14px; color: #444;">
      Best regards,<br />
      <strong>Careersure Academy</strong>
    </p>
  </div>
</div>
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
  <p>Regards,<br>Careersure Academy</p>`;

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
    // res.json(`${mailOption}`);
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = routes;
