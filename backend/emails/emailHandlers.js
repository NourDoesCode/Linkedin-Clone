import { mailtrapClient, sender } from "../lib/mailtrap.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  const recipient = [{ email }];
  try {
    const response = mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Linkedin",
      html: createWelcomeEmailTemplate(name, profileUrl),
      category: "Welcome email",
    });
    console.log("Welcome email sent successfully!", response);
  } catch (error) {
    throw error;
  }
};
