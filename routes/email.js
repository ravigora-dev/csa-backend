// const express = require("express");
// const nodemailer = require("nodemailer");
// const multer = require("multer");
// const routes = express.Router();
// const dotenv = require("dotenv");
// const upload = multer();
// const fs = require("fs");
// const path = require("path");
// // const imageBuffer = fs.readFileSync(
// //   path.join(__dirname, "assets", "image1.jpeg")
// // );
// // const base64ImageString = imageBuffer.toString("base64");
// // const base64Image = `data:image/jpeg;base64,${base64ImageString}`;

// // Use imageBuffer for email attachments, etc.

// dotenv.config({ override: true });
// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// routes.post("/send-email", async (req, res) => {
//   const { to, type, data } = req.body;

//   if (!to || !type || !data) {
//     return res.status(400).json({ error: "Missing field required" });
//   }
//   console.log(type);
//   //   let saleEmailContent = `<h2>New Student Lead Notification</h2>

//   // <p><strong>A new student lead has been submitted through the Careersure Academy website.</strong></p>

//   // <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
//   //   <tr>
//   //     <th align="left">Name</th>
//   //     <td>${data.name}</td>
//   //   </tr>
//   //   <tr>
//   //     <th align="left">Email</th>
//   //     <td>${data.email}</td>
//   //   </tr>
//   //   <tr>
//   //     <th align="left">Phone</th>
//   //     <td>${data.mobile}</td>
//   //   </tr>

//   //   <tr>
//   //     <th align="left">Status</th>
//   //     <td>${data.status}</td>
//   //   </tr>

//   //   <tr>
//   //     <th align="left">Status</th>
//   //     <td>${new Date().toLocaleString()}</td>
//   //   </tr>
//   // </table>

//   // <p>Please reach out to the lead as soon as possible.</p>

//   // <p>Best Regards,<br>
//   // Website Bot - Careersure Academy</p>`;

//   let saleEmailContent = `<div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: Arial, sans-serif;">

//   <!-- Header -->
//   <div style="background-color: #003366; color: #ffffff; padding: 15px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
//     <h2 style="margin: 0; font-size: 22px;">New Student Lead Notification</h2>
//   </div>

//   <p style="font-size: 15px; color: #444444; margin-bottom: 25px;">
//     <strong>A new student lead has been submitted through the Careersure Academy website.</strong>
//   </p>

//   <!-- Info Card -->
//   <div style="margin-bottom: 20px;">
//     <div style="font-weight: bold; color: #003366;">Name</div>
//     <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
//       data.name
//     }</div>
//   </div>

//   <div style="margin-bottom: 20px;">
//     <div style="font-weight: bold; color: #003366;">Email</div>
//     <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
//       data.email
//     }</div>
//   </div>

//   <div style="margin-bottom: 20px;">
//     <div style="font-weight: bold; color: #003366;">Phone</div>
//     <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
//       data.mobile
//     }</div>
//   </div>

//   <div style="margin-bottom: 20px;">
//     <div style="font-weight: bold; color: #003366;">Status</div>
//     <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${
//       data.status
//     }</div>
//   </div>

//   <div style="margin-bottom: 30px;">
//     <div style="font-weight: bold; color: #003366;">Submitted At</div>
//     <div style="padding: 10px 14px; background-color: #f0f8ff; border-left: 4px solid #0077cc; border-radius: 6px;">${new Date().toLocaleString()}</div>
//   </div>

//   <p style="font-size: 14px; color: #444;">
//     📞 Please reach out to the lead as soon as possible.
//   </p>

//   <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;" />

//   <p style="font-size: 14px; color: #555;">
//     Best Regards,<br/>
//     <strong>Careersure Academy</strong>
//   </p>
// </div>
// `;

//   // let studentEmailContent = `<h2>Hello ${data.name},</h2>
//   //         <p>Thank you for reaching out to <strong>Careersure Academy</strong>.</p>
//   //         <p>We have received your application:</p>
//   //         <p>Our team will get back to you shortly.</p>
//   //         <hr />
//   //         <p>Best regards,<br>Careersure Academy Team</p>
//   //         <small>This is an automated message. Please do not reply.</small>
//   //       `;

//   //   let studentEmailContent = `<div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: Arial, sans-serif; overflow: hidden;">

//   //   <!-- Header -->
//   //   <div style="background-color: #003366; color: #ffffff; padding: 20px 30px;">
//   //     <h2 style="margin: 0;">Hello ${data.name},</h2>
//   //   </div>

//   //   <!-- Body -->
//   //   <div style="padding: 30px; background-color: #f9f9f9;">
//   //     <p style="font-size: 16px; color: #333;">
//   //       Thank you for reaching out to <strong>Careersure Academy</strong>.
//   //     </p>

//   //     <!-- Highlight box -->
//   //     <div style="background-color: #e0f3ff; padding: 15px 20px; border-left: 4px solid #0077cc; margin: 20px 0; border-radius: 6px;">
//   //       <p style="margin: 0; font-size: 15px; color: #004d80;">
//   //         We have successfully received your application.<br />
//   //         Our team will get back to you shortly.
//   //       </p>
//   //     </div>

//   //     <p style="font-size: 14px; color: #555;">
//   //       If you have any questions in the meantime, feel free to reply to this email or visit our website.
//   //     </p>

//   //     <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

//   //     <!-- Footer -->
//   //     <p style="font-size: 14px; color: #444;">
//   //       Best regards,<br />
//   //       <strong>Careersure Academy</strong>
//   //     </p>
//   //   </div>
//   // </div>
//   // `;

//   let studentEmailContent = `<!DOCTYPE html>
// <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <title>Careersure Academy Email</title>
//   <!--[if mso]>
//   <noscript>
//     <xml>
//       <o:OfficeDocumentSettings>
//         <o:PixelsPerInch>96</o:PixelsPerInch>
//       </o:OfficeDocumentSettings>
//     </xml>
//   </noscript>
//   <![endif]-->
//   <style>
//     /* Reset and base styles */
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }

//     body,
//     table,
//     td,
//     a {
//       -webkit-text-size-adjust: 100%;
//       -ms-text-size-adjust: 100%;
//     }

//     table,
//     td {
//       mso-table-lspace: 0pt;
//       mso-table-rspace: 0pt;
//       border-collapse: collapse;
//     }

//     img {
//       -ms-interpolation-mode: bicubic;
//       border: 0;
//       height: auto;
//       line-height: 100%;
//       outline: none;
//       text-decoration: none;
//       display: block;
//       max-width: 100%;
//     }

//     /* Main body styles */
//     .email-body {
//       background-color: #000000;
//       color: #FFFFFF;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, Arial, sans-serif;
//       margin: 0;
//       padding: 20px 10px;
//       width: 100% !important;
//       min-height: 100vh;
//     }

//     /* Container */
//     .container {
//       width: 100%;
//       max-width: 740px;
//       margin: 0 auto;
//       background-color: #111111;
//       border-radius: 16px;
//       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
//       overflow: hidden;
//     }

//     /* Typography */
//     h1, h2, h3, p {
//       margin: 0;
//       padding: 0;
//     }

//     h1 {
//       font-size: 28px;
//       font-weight: 700;
//       line-height: 1.3;
//       margin-bottom: 10px;
//     }

//     h2 {
//       color: #F5840B;
//       font-size: 24px;
//       font-weight: 700;
//       margin-bottom: 30px;
//       text-align: center;
//       line-height: 1.3;
//     }

//     h3 {
//       color: #F5840B;
//       font-size: 18px;
//       font-weight: 600;
//       margin-bottom: 8px;
//       line-height: 1.4;
//     }

//     p {
//       font-size: 16px;
//       line-height: 1.6;
//       margin-bottom: 16px;
//       color: #ddd;
//     }

//     a {
//       color: #F5840B;
//       text-decoration: none;
//     }

//     a:hover {
//       text-decoration: underline;
//     }

//     /* Header */
//     .header {
//       background: linear-gradient(135deg, #003366 0%, #004080 100%);
//       color: #FFFFFF;
//       padding: 30px 20px;
//       text-align: center;
//     }

//     .header-logo {
//       width: 80px;
//       height: 80px;
//       border-radius: 50%;
//       background: #fff;
//       margin: 0 auto 15px auto;
//       display: block;
//       border: 3px solid #F5840B;
//     }

//     /* Introduction section */
//     .intro {
//       padding: 30px 20px;
//       text-align: center;
//     }

//     .intro p {
//       font-size: 17px;
//       color: #ddd;
//       margin-bottom: 20px;
//     }

//     .highlight-box {
//       background: linear-gradient(135deg, #1a2a47 0%, #2a3a57 100%);
//       border-left: 4px solid #F5840B;
//       padding: 20px;
//       border-radius: 12px;
//       color: #aad4ff;
//       margin: 20px 0;
//       font-size: 16px;
//       font-weight: 500;
//     }

//     /* Success stories section */
//     .success-section {
//       padding: 40px 20px;
//     }

//     .success-stories {
//       display: block;
//       width: 100%;
//       margin: 0;
//     }

//     .story {
//       background: linear-gradient(135deg, #222222 0%, #333333 100%);
//       border-radius: 16px;
//       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
//       padding: 25px 20px;
//       text-align: center;
//       display: block;
//       width: 100%;
//       margin: 0 auto 20px auto;
//       box-sizing: border-box;
//       max-width: 350px;
//     }

//     .story:last-child,
//     .course-item:last-child {
//       margin-bottom: 0;
//     }

//     .story-image {
//       width: 90px;
//       height: 90px;
//       border-radius: 50%;
//       object-fit: cover;
//       border: 3px solid #F5840B;
//       margin: 0 auto 15px auto;
//       display: block;
//     }

//     .story-name {
//       color: #F5840B;
//       font-weight: 700;
//       font-size: 18px;
//       margin-bottom: 12px;
//     }

//     .story-text {
//       font-style: italic;
//       color: #ccc;
//       font-size: 14px;
//       line-height: 1.5;
//     }

//     /* Courses section */
//     .courses-section {
//       padding: 40px 20px;
//     }

//     .courses {
//       display: block;
//       width: 100%;
//       margin: 0;
//     }

//     .course-item {
//       background: linear-gradient(135deg, #222222 0%, #333333 100%);
//       border-radius: 16px;
//       padding: 25px 20px;
//       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
//       text-align: center;
//       display: block;
//       width: 100%;
//       margin: 0 auto 20px auto;
//       box-sizing: border-box;
//       max-width: 350px;
//     }

//     .course-image {
//       width: 70px;
//       height: 70px;
//       margin: 0 auto 15px auto;
//       border-radius: 12px;
//       display: block;
//     }

//     .course-title {
//       color: #F5840B;
//       font-weight: 700;
//       font-size: 16px;
//       margin-bottom: 10px;
//       line-height: 1.4;
//     }

//     .course-description {
//       color: #ccc;
//       font-size: 14px;
//       line-height: 1.5;
//     }

//     /* Call to action */
//     .cta {
//       text-align: center;
//       padding: 30px 20px;
//     }

//     .cta-button {
//       background: linear-gradient(135deg, #F5840B 0%, #ff9500 100%);
//       color: #000000;
//       font-weight: 700;
//       padding: 16px 40px;
//       border-radius: 50px;
//       font-size: 16px;
//       display: inline-block;
//       box-shadow: 0 6px 20px rgba(245, 132, 11, 0.4);
//       text-decoration: none;
//       border: none;
//       cursor: pointer;
//     }

//     /* Footer */
//     .footer {
//       background: linear-gradient(135deg, #003366 0%, #004080 100%);
//       color: #FFFFFF;
//       font-size: 14px;
//       line-height: 1.6;
//       padding: 25px 20px;
//       text-align: center;
//     }

//     .footer p {
//       margin-bottom: 8px;
//       font-size: 14px;
//       color: #ccc;
//     }

//     .footer a {
//       color: #F5840B;
//       text-decoration: none;
//       font-weight: 500;
//     }

//     .footer a:hover {
//       text-decoration: underline;
//     }

//     /* Mobile responsiveness - Small screens (up to 600px) */
//     @media screen and (max-width: 600px) {
//       .email-body {
//         padding: 10px 5px;
//       }

//       .container {
//         width: 100% !important;
//         border-radius: 12px;
//         margin: 0;
//       }

//       .header {
//         padding: 25px 15px;
//       }

//       .header-logo {
//         width: 70px;
//         height: 70px;
//       }

//       h1 {
//         font-size: 24px;
//       }

//       h2 {
//         font-size: 22px;
//         margin-bottom: 25px;
//       }

//       .intro {
//         padding: 25px 15px;
//       }

//       .success-section,
//       .courses-section {
//         padding: 25px 15px;
//       }

//       .success-stories,
//       .courses {
//         display: block !important;
//       }

//       .story,
//       .course-item {
//         width: 100% !important;
//         max-width: none !important;
//         margin: 0 0 15px 0 !important;
//         display: block !important;
//         padding: 20px 15px;
//       }

//       .story:last-child,
//       .course-item:last-child {
//         margin-bottom: 0 !important;
//       }

//       .story:last-child,
//       .course-item:last-child {
//         margin-bottom: 0;
//       }

//       .story-image {
//         width: 80px;
//         height: 80px;
//       }

//       .course-image {
//         width: 60px;
//         height: 60px;
//       }

//       .cta {
//         padding: 25px 15px;
//       }

//       .cta-button {
//         padding: 14px 30px;
//         font-size: 15px;
//       }

//       .footer {
//         padding: 20px 15px;
//       }
//     }

//     /* Extra small screens */
//     @media screen and (max-width: 480px) {
//       h1 {
//         font-size: 22px;
//       }

//       h2 {
//         font-size: 20px;
//       }

//       .intro p {
//         font-size: 16px;
//       }

//       .highlight-box {
//         padding: 15px;
//         font-size: 15px;
//       }

//       .success-stories,
//       .courses {
//         display: block !important;
//       }

//       .story,
//       .course-item {
//         width: 100% !important;
//         max-width: none !important;
//         margin: 0 0 15px 0 !important;
//         display: block !important;
//       }
//     }

//     /* Medium screens (601px to 767px) - 2 columns */
//     @media screen and (min-width: 601px) and (max-width: 767px) {
//       .success-section,
//       .courses-section {
//         padding: 35px 20px;
//       }

//       .success-stories,
//       .courses {
//         display: table !important;
//         width: 100% !important;
//         table-layout: fixed !important;
//         border-spacing: 20px 0 !important;
//         margin: 0 -20px !important;
//       }

//       .story,
//       .course-item {
//         display: table-cell !important;
//         width: 50% !important;
//         vertical-align: top !important;
//         margin: 0 !important;
//         max-width: none !important;
//       }
//     }

//     /* Large screens (768px and above) - 3 columns */
//     @media screen and (min-width: 768px) {
//       .success-section,
//       .courses-section {
//         padding: 40px 25px;
//       }

//       .success-stories,
//       .courses {
//         display: table !important;
//         width: 100% !important;
//         table-layout: fixed !important;
//         border-spacing: 25px 0 !important;
//         margin: 0 -25px !important;
//       }

//       .story,
//       .course-item {
//         display: table-cell !important;
//         width: 33.333% !important;
//         vertical-align: top !important;
//         margin: 0 !important;
//         max-width: none !important;
//       }
//     }

//     /* Extra large screens (1024px and above) - Better 3-column spacing */
//     @media screen and (min-width: 1024px) {
//       .container {
//         max-width: 900px;
//       }

//       .success-section,
//       .courses-section {
//         padding: 45px 30px;
//       }

//       .success-stories,
//       .courses {
//         border-spacing: 30px 0 !important;
//         margin: 0 -30px !important;
//       }

//       .story,
//       .course-item {
//         width: 33.333% !important;
//       }
//     }

//     /* Very large screens (1200px and above) */
//     @media screen and (min-width: 1200px) {
//       .container {
//         max-width: 1000px;
//       }

//       .success-stories,
//       .courses {
//         border-spacing: 35px 0 !important;
//         margin: 0 -35px !important;
//       }

//       .story,
//       .course-item {
//         width: 33.333% !important;
//       }
//     }

//     /* Dark mode support */
//     @media (prefers-color-scheme: dark) {
//       .email-body {
//         background-color: #000000;
//       }
//     }

//     /* High contrast mode support */
//     @media (prefers-contrast: high) {
//       .container {
//         border: 2px solid #F5840B;
//       }

//       .story,
//       .course-item {
//         border: 1px solid #F5840B;
//       }
//     }

//     /* Print styles */
//     @media print {
//       .email-body {
//         background: white !important;
//         color: black !important;
//       }

//       .container {
//         box-shadow: none !important;
//         border: 1px solid #ccc !important;
//       }
//     }

//     /* Email client specific fixes */
//     /* Remove flexbox for better email client compatibility */
//   </style>
//   <!--[if mso]>
//   <style>
//     .success-stories,
//     .courses {
//       display: block !important;
//     }
//     .story,
//     .course-item {
//       display: inline-block !important;
//       vertical-align: top !important;
//       width: 30% !important;
//     }
//   </style>
//   <![endif]-->
// </head>
// <body class="email-body">
//   <div class="container">
//     <!-- Header -->
//     <div class="header">
//       <img src="cid:logo@careersure" alt="CareerSure Academy Logo" class="header-logo" />
//       <h1>Hello ${data.name},<br>Welcome to Careersure Academy!</h1>
//     </div>

//     <!-- Introduction -->
//     <div class="intro">
//       <p>Thank you for reaching out to <strong>Careersure Academy</strong>. We're excited to support your career transformation journey.</p>
//       <div class="highlight-box">
//         <strong>✅ Your application has been successfully received!</strong><br>
//         Our expert team will review your profile and get back to you within 24 hours.
//       </div>
//     </div>

//     <!-- Success Stories -->
//     <div class="success-section">
//       <h2>🌟 Success Stories That Inspire</h2>
//       <div class="success-stories">
//         <div class="story">
//           <img src="cid:logo2@careersure" alt="Dasthagiri" class="story-image" />
//           <div class="story-name">Dasthagiri</div>
//           <p class="story-text">
//             "Landed Software Developer role at Saven Technologies within 5 months of training. The hands-on projects made all the difference!"
//           </p>
//         </div>

//         <div class="story">
//           <img src="cid:logo1@careersure" alt="Archana Vusa" class="story-image" />
//           <div class="story-name">Archana Vusa</div>
//           <p class="story-text">
//             "Secured Full Stack Developer position at V&V Technologies. The mentorship and real-world projects prepared me perfectly!"
//           </p>
//         </div>

//         <div class="story">
//           <img src="cid:logo3@careersure" alt="Nikhil" class="story-image" />
//           <div class="story-name">Nikhil</div>
//           <p class="story-text">
//             "Got placed at TCS as Software Developer after 5 months of intensive training. Best investment in my career!"
//           </p>
//         </div>
//       </div>
//     </div>

//     <!-- Popular Courses -->
//     <div class="courses-section">
//       <h2>🚀 Our Industry-Leading Courses</h2>
//       <div class="courses">
//         <div class="course-item">
//           <img src="cid:logo4@careersure" alt="MERN Stack Course" class="course-image" />
//           <div class="course-title">MERN Full Stack with AI</div>
//           <p class="course-description">
//             Master MongoDB, Express.js, React, and Node.js with AI integration. Build production-ready applications with modern tools and deployment strategies.
//           </p>
//         </div>

//         <div class="course-item">
//           <img src="cid:logo5@careersure" alt="Python Full Stack Course" class="course-image" />
//           <div class="course-title">Python Full Stack with AI</div>
//           <p class="course-description">
//             Learn Django, Flask, data analysis, machine learning, and AI concepts. Perfect for aspiring data scientists and full-stack developers.
//           </p>
//         </div>

//         <div class="course-item">
//           <img src="cid:logo6@careersure" alt="AI-ML Course" class="course-image" />
//           <div class="course-title">AI, ML & Generative AI</div>
//           <p class="course-description">
//             Dive deep into artificial intelligence, machine learning algorithms, and generative AI. Includes AWS, Docker, Kubernetes, and CI/CD pipelines.
//           </p>
//         </div>
//       </div>
//     </div>

//     <!-- Call to Action -->
//     <div class="cta">
//       <p style="margin-bottom: 20px; font-size: 18px; color: #F5840B; font-weight: 600;">
//         Ready to Transform Your Career?
//       </p>
//       <a href="https://careersureacademy.com/courses" target="_blank" class="cta-button">
//         Explore All Courses →
//       </a>
//     </div>

//     <!-- Footer -->
//     <div class="footer">
//       <p><strong>Careersure Academy</strong> - Your Partner in Career Success</p>
//       <p>📧 contact@careersureacademy.com | 📞 +91-6301046346</p>
//       <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444;">
//         <a href="https://careersureacademy.com/unsubscribe">Unsubscribe</a> |
//         <a href="https://careersureacademy.com/privacy-policy">Privacy Policy</a> |
//         <a href="https://careersureacademy.com/terms">Terms of Service</a>
//       </p>
//       <p style="margin-top: 10px; font-size: 12px; color: #999;">
//         © 2025 Careersure Academy. All rights reserved.
//       </p>
//     </div>
//   </div>
// </body>
// </html>`;

//   let mentorEmailContent = `<h2>New Mentorship Lead Notification</h2>
//   <p><strong>A new mentorship enquiry has been submitted via the Careersure Academy platform.</strong></p>
//   <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
//     <tr><th align="left">Full Name</th><td>${data.fullName}</td></tr>
//     <tr><th align="left">Email</th><td><a href="mailto:${data.email}">${
//     data.email
//   }</a></td></tr>
//     <tr><th align="left">Phone</th><td><a href="tel:${data.phone}">${
//     data.phone
//   }</a></td></tr>
//     <tr><th align="left">Designation</th><td>${data.designation}</td></tr>
//     <tr><th align="left">Current Company</th><td>${
//       data.currentCompany
//     }</td></tr>
//     <tr><th align="left">Years of Experience</th><td>${
//       data.experience
//     }</td></tr>
//     <tr><th align="left">Area of Expertise</th><td>${data.expertise}</td></tr>
//     <tr><th align="left">LinkedIn Profile</th><td><a href="${
//       data.linkedinProfile
//     }" target="_blank">View Profile</a></td></tr>
//     <tr><th align="left">Resume</th><td><a href="${
//       data.resumeLink
//     }" target="_blank">Download Resume</a></td></tr>
//     <tr><th align="left">Message</th><td>${
//       data.message || "(No message submitted)"
//     }</td></tr>
//     <tr><th align="left">Submitted At</th><td>${new Date(
//       data.submittedAt
//     ).toLocaleString()}</td></tr>
//   </table>
//   <p>Please reach out to the lead as soon as possible to qualify and engage.</p>
//   <p>Regards,<br>Careersure Academy</p>`;

//   let studentEmailSubject = "Thank you for contacting Careersure Academy!";
//   let saleEmailSubject = "New Lead Generated for CareerSure Academy!";
//   let mentorEmailSubject = `🧑‍💼 New Mentorship Lead: ${data.fullName} - MERN Developer`;

//   let emailContent;
//   let emailSubject;

//   switch (type) {
//     case "ADMIN_NOTIFICATION":
//       emailContent = saleEmailContent;
//       emailSubject = saleEmailSubject;
//       break;
//     case "MENTOR_APPLICATION":
//       emailContent = mentorEmailContent;
//       emailSubject = mentorEmailSubject;
//       break;
//     case "USER_CONFIRMATION":
//       emailContent = studentEmailContent;
//       emailSubject = studentEmailSubject;
//       break;
//   }

//   //   let emailContent =
//   //     type == "ADMIN_NOTIFICATION" ? saleEmailContent : studentEmailContent;
//   //   let emailSubject =
//   //     type == "ADMIN_NOTIFICATION" ? saleEmailSubject : studentEmailSubject;
//   let studentEmail;
//   if (type === "USER_CONFIRMATION") {
//     studentEmail = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject: `${emailSubject}`,
//       html: emailContent,
//       attachments: [
//         {
//           filename: "logo.jpeg",
//           path: path.join(__dirname, "assets", "image1.png"),
//           cid: "logo@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "archana.png"),
//           cid: "logo1@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "dasthagiri.png"),
//           cid: "logo2@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "nikhil.png"),
//           cid: "logo3@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "mern.png"),
//           cid: "logo4@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "python.png"),
//           cid: "logo5@careersure", // Match this ID with the img src above
//         },
//         {
//           filename: "logo.png",
//           path: path.join(__dirname, "assets", "ai-ml.png"),
//           cid: "logo6@careersure", // Match this ID with the img src above
//         },
//       ],
//     };
//   } else {
//     studentEmail = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject: `${emailSubject}`,
//       html: emailContent,
//     };
//   }

//   try {
//     const info = await transport.sendMail(studentEmail);
//     res.json({ success: true, message: info.messageId });
//     // res.status(200).json({ message: "successFully Send" });
//   } catch (error) {
//     // res.json(`${mailOption}`);
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

// module.exports = routes;

const express = require("express");
const multer = require("multer");
const routes = express.Router();
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const upload = multer();
// const sgMail = require("@sendgrid/mail");
const { Resend } = require("resend");

dotenv.config({ override: true });

// ✅ Set SendGrid API Key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------- Your existing route ----------------
routes.post("/send-email", async (req, res) => {
  const { to, type, data } = req.body;

  if (!to || !type || !data) {
    return res.status(400).json({ error: "Missing field required" });
  }

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
</div>`; // your existing HTML
  let studentEmailContent = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Careersure Academy Email</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    /* Reset and base styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    
    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse;
    }
    
    img {
      -ms-interpolation-mode: bicubic;
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      display: block;
      max-width: 100%;
    }

    /* Main body styles */
    .email-body {
      background-color: #000000;
      color: #FFFFFF;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, Arial, sans-serif;
      margin: 0;
      padding: 20px 10px;
      width: 100% !important;
      min-height: 100vh;
    }

    /* Container */
    .container {
      width: 100%;
      max-width: 740px;
      margin: 0 auto;
      background-color: #111111;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
      overflow: hidden;
    }

    /* Typography */
    h1, h2, h3, p {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 10px;
    }

    h2 {
      color: #F5840B;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
      text-align: center;
      line-height: 1.3;
    }

    h3 {
      color: #F5840B;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      line-height: 1.4;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 16px;
      color: #ddd;
    }

    a {
      color: #F5840B;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* Header */
    .header {
      background: linear-gradient(135deg, #003366 0%, #004080 100%);
      color: #FFFFFF;
      padding: 30px 20px;
      text-align: center;
    }

    .header-logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #fff;
      margin: 0 auto 15px auto;
      display: block;
      border: 3px solid #F5840B;
    }

    /* Introduction section */
    .intro {
      padding: 30px 20px;
      text-align: center;
    }

    .intro p {
      font-size: 17px;
      color: #ddd;
      margin-bottom: 20px;
    }

    .highlight-box {
      background: linear-gradient(135deg, #1a2a47 0%, #2a3a57 100%);
      border-left: 4px solid #F5840B;
      padding: 20px;
      border-radius: 12px;
      color: #aad4ff;
      margin: 20px 0;
      font-size: 16px;
      font-weight: 500;
    }

    /* Success stories section */
    .success-section {
      padding: 40px 20px;
    }

    .success-stories {
      display: block;
      width: 100%;
      margin: 0;
    }

    .story {
      background: linear-gradient(135deg, #222222 0%, #333333 100%);
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
      padding: 25px 20px;
      text-align: center;
      display: block;
      width: 100%;
      margin: 0 auto 20px auto;
      box-sizing: border-box;
      max-width: 350px;
    }

    .story:last-child,
    .course-item:last-child {
      margin-bottom: 0;
    }

    .story-image {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #F5840B;
      margin: 0 auto 15px auto;
      display: block;
    }

    .story-name {
      color: #F5840B;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 12px;
    }

    .story-text {
      font-style: italic;
      color: #ccc;
      font-size: 14px;
      line-height: 1.5;
    }

    /* Courses section */
    .courses-section {
      padding: 40px 20px;
    }

    .courses {
      display: block;
      width: 100%;
      margin: 0;
    }

    .course-item {
      background: linear-gradient(135deg, #222222 0%, #333333 100%);
      border-radius: 16px;
      padding: 25px 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
      text-align: center;
      display: block;
      width: 100%;
      margin: 0 auto 20px auto;
      box-sizing: border-box;
      max-width: 350px;
    }

    .course-image {
      width: 70px;
      height: 70px;
      margin: 0 auto 15px auto;
      border-radius: 12px;
      display: block;
    }

    .course-title {
      color: #F5840B;
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .course-description {
      color: #ccc;
      font-size: 14px;
      line-height: 1.5;
    }

    /* Call to action */
    .cta {
      text-align: center;
      padding: 30px 20px;
    }

    .cta-button {
      background: linear-gradient(135deg, #F5840B 0%, #ff9500 100%);
      color: #000000;
      font-weight: 700;
      padding: 16px 40px;
      border-radius: 50px;
      font-size: 16px;
      display: inline-block;
      box-shadow: 0 6px 20px rgba(245, 132, 11, 0.4);
      text-decoration: none;
      border: none;
      cursor: pointer;
    }

    /* Footer */
    .footer {
      background: linear-gradient(135deg, #003366 0%, #004080 100%);
      color: #FFFFFF;
      font-size: 14px;
      line-height: 1.6;
      padding: 25px 20px;
      text-align: center;
    }

    .footer p {
      margin-bottom: 8px;
      font-size: 14px;
      color: #ccc;
    }

    .footer a {
      color: #F5840B;
      text-decoration: none;
      font-weight: 500;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    /* Mobile responsiveness - Small screens (up to 600px) */
    @media screen and (max-width: 600px) {
      .email-body {
        padding: 10px 5px;
      }

      .container {
        width: 100% !important;
        border-radius: 12px;
        margin: 0;
      }

      .header {
        padding: 25px 15px;
      }

      .header-logo {
        width: 70px;
        height: 70px;
      }

      h1 {
        font-size: 24px;
      }

      h2 {
        font-size: 22px;
        margin-bottom: 25px;
      }

      .intro {
        padding: 25px 15px;
      }

      .success-section,
      .courses-section {
        padding: 25px 15px;
      }

      .success-stories,
      .courses {
        display: block !important;
      }

      .story,
      .course-item {
        width: 100% !important;
        max-width: none !important;
        margin: 0 0 15px 0 !important;
        display: block !important;
        padding: 20px 15px;
      }

      .story:last-child,
      .course-item:last-child {
        margin-bottom: 0 !important;
      }

      .story:last-child,
      .course-item:last-child {
        margin-bottom: 0;
      }

      .story-image {
        width: 80px;
        height: 80px;
      }

      .course-image {
        width: 60px;
        height: 60px;
      }

      .cta {
        padding: 25px 15px;
      }

      .cta-button {
        padding: 14px 30px;
        font-size: 15px;
      }

      .footer {
        padding: 20px 15px;
      }
    }

    /* Extra small screens */
    @media screen and (max-width: 480px) {
      h1 {
        font-size: 22px;
      }

      h2 {
        font-size: 20px;
      }

      .intro p {
        font-size: 16px;
      }

      .highlight-box {
        padding: 15px;
        font-size: 15px;
      }

      .success-stories,
      .courses {
        display: block !important;
      }

      .story,
      .course-item {
        width: 100% !important;
        max-width: none !important;
        margin: 0 0 15px 0 !important;
        display: block !important;
      }
    }

    /* Medium screens (601px to 767px) - 2 columns */
    @media screen and (min-width: 601px) and (max-width: 767px) {
      .success-section,
      .courses-section {
        padding: 35px 20px;
      }

      .success-stories,
      .courses {
        display: table !important;
        width: 100% !important;
        table-layout: fixed !important;
        border-spacing: 20px 0 !important;
        margin: 0 -20px !important;
      }

      .story,
      .course-item {
        display: table-cell !important;
        width: 50% !important;
        vertical-align: top !important;
        margin: 0 !important;
        max-width: none !important;
      }
    }

    /* Large screens (768px and above) - 3 columns */
    @media screen and (min-width: 768px) {
      .success-section,
      .courses-section {
        padding: 40px 25px;
      }

      .success-stories,
      .courses {
        display: table !important;
        width: 100% !important;
        table-layout: fixed !important;
        border-spacing: 25px 0 !important;
        margin: 0 -25px !important;
      }

      .story,
      .course-item {
        display: table-cell !important;
        width: 33.333% !important;
        vertical-align: top !important;
        margin: 0 !important;
        max-width: none !important;
      }
    }

    /* Extra large screens (1024px and above) - Better 3-column spacing */
    @media screen and (min-width: 1024px) {
      .container {
        max-width: 900px;
      }

      .success-section,
      .courses-section {
        padding: 45px 30px;
      }

      .success-stories,
      .courses {
        border-spacing: 30px 0 !important;
        margin: 0 -30px !important;
      }

      .story,
      .course-item {
        width: 33.333% !important;
      }
    }

    /* Very large screens (1200px and above) */
    @media screen and (min-width: 1200px) {
      .container {
        max-width: 1000px;
      }

      .success-stories,
      .courses {
        border-spacing: 35px 0 !important;
        margin: 0 -35px !important;
      }

      .story,
      .course-item {
        width: 33.333% !important;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .email-body {
        background-color: #000000;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .container {
        border: 2px solid #F5840B;
      }
      
      .story,
      .course-item {
        border: 1px solid #F5840B;
      }
    }

    /* Print styles */
    @media print {
      .email-body {
        background: white !important;
        color: black !important;
      }
      
      .container {
        box-shadow: none !important;
        border: 1px solid #ccc !important;
      }
    }

    /* Email client specific fixes */
    /* Remove flexbox for better email client compatibility */
  </style>
  <!--[if mso]>
  <style>
    .success-stories,
    .courses {
      display: block !important;
    }
    .story,
    .course-item {
      display: inline-block !important;
      vertical-align: top !important;
      width: 30% !important;
    }
  </style>
  <![endif]-->
</head>
<body class="email-body">
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="cid:logo@careersure" alt="CareerSure Academy Logo" class="header-logo" />
      <h1>Hello ${data.name},<br>Welcome to Careersure Academy!</h1>
    </div>

    <!-- Introduction -->
    <div class="intro">
      <p>Thank you for reaching out to <strong>Careersure Academy</strong>. We're excited to support your career transformation journey.</p>
      <div class="highlight-box">
        <strong>✅ Your application has been successfully received!</strong><br>
        Our expert team will review your profile and get back to you within 24 hours.
      </div>
    </div>

    <!-- Success Stories -->
    <div class="success-section">
      <h2>🌟 Success Stories That Inspire</h2>
      <div class="success-stories">
        <div class="story">
          <img src="cid:logo2@careersure" alt="Dasthagiri" class="story-image" />
          <div class="story-name">Dasthagiri</div>
          <p class="story-text">
            "Landed Software Developer role at Saven Technologies within 5 months of training. The hands-on projects made all the difference!"
          </p>
        </div>
        
        <div class="story">
          <img src="cid:logo1@careersure" alt="Archana Vusa" class="story-image" />
          <div class="story-name">Archana Vusa</div>
          <p class="story-text">
            "Secured Full Stack Developer position at V&V Technologies. The mentorship and real-world projects prepared me perfectly!"
          </p>
        </div>
        
        <div class="story">
          <img src="cid:logo3@careersure" alt="Nikhil" class="story-image" />
          <div class="story-name">Nikhil</div>
          <p class="story-text">
            "Got placed at TCS as Software Developer after 5 months of intensive training. Best investment in my career!"
          </p>
        </div>
      </div>
    </div>

    <!-- Popular Courses -->
    <div class="courses-section">
      <h2>🚀 Our Industry-Leading Courses</h2>
      <div class="courses">
        <div class="course-item">
          <img src="cid:logo4@careersure" alt="MERN Stack Course" class="course-image" />
          <div class="course-title">MERN Full Stack with AI</div>
          <p class="course-description">
            Master MongoDB, Express.js, React, and Node.js with AI integration. Build production-ready applications with modern tools and deployment strategies.
          </p>
        </div>
        
        <div class="course-item">
          <img src="cid:logo5@careersure" alt="Python Full Stack Course" class="course-image" />
          <div class="course-title">Python Full Stack with AI</div>
          <p class="course-description">
            Learn Django, Flask, data analysis, machine learning, and AI concepts. Perfect for aspiring data scientists and full-stack developers.
          </p>
        </div>
        
        <div class="course-item">
          <img src="cid:logo6@careersure" alt="AI-ML Course" class="course-image" />
          <div class="course-title">AI, ML & Generative AI</div>
          <p class="course-description">
            Dive deep into artificial intelligence, machine learning algorithms, and generative AI. Includes AWS, Docker, Kubernetes, and CI/CD pipelines.
          </p>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="cta">
      <p style="margin-bottom: 20px; font-size: 18px; color: #F5840B; font-weight: 600;">
        Ready to Transform Your Career?
      </p>
      <a href="https://careersureacademy.com/courses" target="_blank" class="cta-button">
        Explore All Courses →
      </a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>Careersure Academy</strong> - Your Partner in Career Success</p>
      <p>📧 contact@careersureacademy.com | 📞 +91-6301046346</p>
      <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444;">
        <a href="https://careersureacademy.com/unsubscribe">Unsubscribe</a> | 
        <a href="https://careersureacademy.com/privacy-policy">Privacy Policy</a> | 
        <a href="https://careersureacademy.com/terms">Terms of Service</a>
      </p>
      <p style="margin-top: 10px; font-size: 12px; color: #999;">
        © 2025 Careersure Academy. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>`; // your existing HTML
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
  <p>Regards,<br>Careersure Academy</p>`; // your existing HTML

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

  try {
    const attachments =
      type === "USER_CONFIRMATION"
        ? [
            {
              filename: "logo.png",
              content: fs.readFileSync(
                path.join(__dirname, "assets", "image1.png")
              ),
              content_id: "logo@careersure",
            },
            {
              filename: "archana.png",
              content: fs.readFileSync(
                path.join(__dirname, "assets", "archana.png")
              ),
              content_id: "logo1@careersure",
            },
            {
              filename: "dasthagiri.png",
              content: fs.readFileSync(
                path.join(__dirname, "assets", "dasthagiri.png")
              ),
              content_id: "logo2@careersure",
            },
            {
              filename: "nikhil.png",
              content: fs.readFileSync(
                path.join(__dirname, "assets", "nikhil.png")
              ),
              content_id: "logo3@careersure",
            },
            {
              filename: "mern.png",
              content: fs.readFileSync(
                path.join(__dirname, "assets", "mern.png")
              ),
              content_id: "logo4@careersure",
            },
          ]
        : [];

    // ✅ Send using Resend
    // ✅ Send using Resend
    // First send to the user
    const { data: userResponse, error: userError } = await resend.emails.send({
      from: process.env.EMAIL_USER || "onboarding@resend.dev",
      to, // user's email
      subject: emailSubject,
      html: emailContent,
      attachments,
    });

    if (userError) {
      console.error("User Email Error:", userError);
      return res.status(500).json({ error: "Failed to send email to user" });
    }

    // ✅ Then send to sales team
    const { data: salesResponse, error: salesError } = await resend.emails.send(
      {
        from: process.env.EMAIL_USER || "onboarding@resend.dev",
        to: "careersure.info@gmail.com", // fixed sales team email
        subject: "📩 New Lead Notification - Careersure Academy",
        html: saleEmailContent, // or use same content as user, depends on need
      }
    );

    if (salesError) {
      console.error("Sales Email Error:", salesError);
      return res
        .status(500)
        .json({ error: "Failed to send email to sales team" });
    }

    res.status(200).json({
      success: true,
      message: "Emails sent successfully!",
      userId: userResponse?.id,
      salesId: salesResponse?.id,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = routes;
