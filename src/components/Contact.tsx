"use client"
import * as Yup from 'yup';
import { sendEmail } from '@/resend';
import { FormikHelpers, useFormik } from 'formik';
import { FcAssistant } from "react-icons/fc";
import Link from 'next/link';

export interface InitialValues {
  email: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email('Correo electrónico inválido').required('El correo es obligatorio').trim(),
  subject: Yup.string().required('El asunto es obligatorio').trim().max(50, 'El asunto no puede tener más de 50 caracteres'),
  message: Yup.string().required('El mensaje es obligatorio').trim().max(500, 'El mensaje no puede tener más de 500 caracteres'),
});

export default function ContactForm() {
  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => {
      try {
        await sendEmail(values);
        formikHelpers.resetForm();
        alert('Correo enviado exitosamente');
      } catch (error) {
        console.log(error);
        alert('Hubo un error al enviar el correo');
      }
    },
  });

  return (
    <section id='contacto'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h2 className="text-4xl mb-4 font-bold flex justify-center items-center gap-2"><FcAssistant  size={40} /> Formulario</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Si tienes alguna duda, no dudes en enviarme un correo o contactarme directamente por WhatsApp.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={formik.handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="subject" className="leading-7 text-base">Asunto:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-red-600 text-base font-medium mt-1">{formik.errors.subject}</p>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-base">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-600 text-base font-medium mt-1">{formik.errors.email}</p>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-base">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-600 text-base font-medium mt-1">{formik.errors.message}</p>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="submit" className="flex mx-auto text-white cursor-pointer bg-green-700 font-medium border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-xl">
                Enviar
              </button>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center">
            <Link href="mailto:contacto@colgantesmonica.cl" className="text-xl font-medium">contacto@colgantesmonica.cl</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
