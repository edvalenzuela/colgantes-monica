"use server"
import { Resend } from 'resend';
import { InitialValues } from '@/components/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, subject, message }:InitialValues) => {
  try {
    await resend.emails.send({
      from: 'edvalenzuelap@gmail.com',
      to: email,
      subject: subject,
      html: `<p>${message}</p>`,
    });
  } catch (error) {
    throw new Error('Error al enviar el correo');
  }
}
