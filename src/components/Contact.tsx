"use client"
import { sendEmail } from '@/resend';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';

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
    <section className="min-h-screen flex items-center justify-center text-gray-600 body-font relative bg-white" id="contacto">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.380665441864!2d-70.6816969220571!3d-33.595426304955474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d9718fb4f3c3%3A0xf5945daf558bdcf0!2sApalaches%2014531%2C%208051958%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1739091183352!5m2!1ses!2scl"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Correo</h2>
              <a className="text-indigo-500 leading-relaxed">monica.pm.1964@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Celular</h2>
              <p className="leading-relaxed">+56991440999</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Formulario</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Si tienes alguna duda, no dudes en enviarme un correo o contactarme directamente por WhatsApp.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && <div className="text-red-500 text-xs">{formik.errors.email}</div>}
            </div>
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Asunto:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
              {formik.errors.subject && formik.touched.subject && <div className="text-red-500 text-xs">{formik.errors.subject}</div>}
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message && <div className="text-red-500 text-xs">{formik.errors.message}</div>}
            </div>
            <button type="submit" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 cursor-pointer rounded text-lg">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
