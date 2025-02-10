"use server"
import { Resend } from 'resend';
import { InitialValues } from '@/components/Contact';
import EmailTemplate from './email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, subject, name, message }:InitialValues) => {
  try {
    await resend.emails.send({
      from: 'Monica Peña <noreply@colgantesmonica.cl>',
      to: ['contacto@colgantesmonica.cl'],
      replyTo: email,
      subject,
      react: EmailTemplate({name, message}),
    });
  } catch (error) {
    console.log(error)
    throw new Error('Error al enviar el correo');
  }
}


