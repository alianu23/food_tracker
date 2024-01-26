import nodemailer from "nodemailer";
import "dotenv/config";

const transport = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (email: string, subject: string) => {
  const info = await transport.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
    html: generateTemplate(email), // html body
  });
};

const generateTemplate = (email: string) => {
  return `
    <div>
    <h1>Hello ${email}</h1>
    <h1>Welcome to our platform</h1>
    <p>Here is your verification code : 123456</p>
    </div>
    `;
};
