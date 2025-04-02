import { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useForm } from '@formspree/react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const formKey = process.env.NEXT_PUBLIC_FORM_KEY || "";
  const [formspree, handleFormspreeSubmit] = useForm(formKey);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  // Validation schema
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      await handleFormspreeSubmit(values);
      
      setLoading(false);
      showAlert({
        show: true,
        text: 'Thank you for your message 😃',
        type: 'success',
      });

      setTimeout(() => {
        hideAlert(false);
        resetForm();
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error(error);

      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: 'danger',
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form ref={formRef} className="mt-12 flex flex-col space-y-7">
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <Field
                    type="text"
                    name="name"
                    className="field-input"
                    placeholder="ex., John Doe"
                  />
                  <ErrorMessage 
                    name="name" 
                    component="div" 
                    className="text-red-500 text-sm" 
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Email address</span>
                  <Field
                    type="email"
                    name="email"
                    className="field-input"
                    placeholder="ex., johndoe@gmail.com"
                  />
                  <ErrorMessage 
                    name="email" 
                    component="div" 
                    className="text-red-500 text-sm" 
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Your message</span>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                  />
                  <ErrorMessage 
                    name="message" 
                    component="div" 
                    className="text-red-500 text-sm" 
                  />
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;