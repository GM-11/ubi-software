import type { RequestEvent } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export async function POST(requestEvent: RequestEvent) {
  const body = await requestEvent.request.json();

  const { name, email, mobile, expertise } = body;

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "mathuyrgopal@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailDetails = {
    from: email,
    to: "Info@ubionline.io",
    cc: ["Parulsangera@gmail.com", "mathuyrgopal@gmail.com"],
    subject: name + " has sent a new message",
    text: `Name: ${name}\n\nEmail:${email}\n\nMobile:${mobile}\n\nExpertise:${expertise}`,
  };

  let response = "";
  let code = 0;

  await new Promise((resolve, reject) => {
    mailTransporter.sendMail(mailDetails, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
        response = `${err}`;
        code = 501;
      } else {
        console.log(info);
        resolve(info);
        response = `${info.response}`;
        code = 200;
      }
    });
  });

  return json({ response, code }, { status: code });
}
