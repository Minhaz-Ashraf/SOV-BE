import dotenv from "dotenv";
import SibApiV3Sdk from "@getbrevo/brevo";
import nodemailer from "nodemailer";

dotenv.config();

const BREVO_API = process.env.BREVO_API_KEY;
const EMAIL_FROM = process.env.DOMAIN_EMAIL;
// const senderName = process.env.SENDER_IDENTITY; // Uncomment and use sender identity

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = BREVO_API;

export const sendEmail = async ({ to, subject, htmlContent }) => {
  try {

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = {email: EMAIL_FROM };
    
    sendSmtpEmail.to = [{ email: to }]; // Use `to` passed in the function

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error; // Propagate the error up to the caller
  }
};


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendEmailVerification = async (email, subject, temp) => {
  // Debugging output
  // console.log("Sender Email:", process.env.SENDER_MAIL);
  // console.log("App Password:", process.env.APP_PASSWORD);

  const mailOptions = {
    from: {
      name: "SOV",
      address: process.env.SENDER_MAIL,
    },
    to: email,
    subject: subject,
    html: temp,
  };

  try {
    // Send the email
    const mail = await transporter.sendMail(mailOptions);
    // console.log("Mail sent successfully:", mail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendAuthData = async (email, password) => {
  // console.log(email, password);
  const mailOptions = {
    from: {
      name: "SOV",
      address: process.env.SENDER_MAIL,
    },
    to: email,
    subject: "Account Credentials",
    text: `Your Credentials is ${{'Email': email, "password": password}}`,
  };

  try {
    // Send the email
    const mail = await transporter.sendMail(mailOptions);
    // console.log("Mail sent successfully:", mail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendAccountCredentials = async (email, subject, temp) => {
  // console.log(email, password);
  const mailOptions = {
    from: {
      name: "SOV",
      address: process.env.SENDER_MAIL,
    },
    to: email,
    subject: subject,
    html: temp,
  };

  try {
    // Send the email
    const mail = await transporter.sendMail(mailOptions);
    // console.log("Mail sent successfully:", mail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export { sendEmailVerification, sendAuthData, sendAccountCredentials };