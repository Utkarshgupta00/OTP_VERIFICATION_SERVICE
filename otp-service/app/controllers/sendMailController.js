const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const logger = require('../utils/logger');
const dotenv = require('dotenv');
dotenv.config();

async function sendMailController(email, otp, organization, subject) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
        from: `"${organization}" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `${subject}`,
        text: `Your OTP is ${otp}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${organization} One-Time Password (OTP)</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
        
                .container {
                    width: 80%;
                    max-width: 600px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
        
                .header {
                    background-color: #3498db;
                    color: #ffffff;
                    text-align: center;
                    padding: 30px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
        
                h1 {
                    font-size: 28px;
                    margin: 0;
                }
        
                .content {
                    padding: 30px;
                    text-align: center;
                }
        
                p {
                    font-size: 18px;
                    color: #333333;
                    margin: 0 0 20px 0;
                }
        
                .otp {
                    font-size: 36px;
                    font-weight: bold;
                    color: #3498db;
                }
        
                .footer {
                    border-top: 1px dashed #cccccc;
                    padding: 20px;
                    text-align: center;
                }
        
                .footer p {
                    font-size: 14px;
                    color: #555555;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>${organization}</h1>
                </div>
                <div class="content">
                    <p>Your One-Time Password (OTP) is:</p>
                    <p class="otp">${otp}</p>
                </div>
                <div class="footer">
                    <p>Thank you for using our service!</p>
                </div>
            </div>
        </body>
        </html>
        
              `,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Sent OTP to ${email}`);
  } catch (error) {
    console.log('error aa rha hao');
    logger.error(`Failed to send OTP to ${email}`, error.message);
    throw new Error(error.message);
  }
}

module.exports = sendMailController;
