import nodemailer from "nodemailer";

export type Message = {
  to: string;
  from: string;
  subject: string;
  html: string;
};

export const MailTrap = async (message: Message) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c876ca97f6630d",
      pass: "7935f2c88b59dc",
    },
  });

  await transporter
    .sendMail({
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
    })
    .then((info) => {
      console.log(info);
    })
    .catch((err) => {
      console.log(err);
    });
};
