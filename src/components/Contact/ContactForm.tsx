import React from 'react';
import { useForm } from './useForm';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

const ContactForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        error={errors.fullName}
        onChange={handleChange}
        required
      />
      
      <FormInput
        label="Subject"
        name="subject"
        value={formData.subject}
        error={errors.subject}
        onChange={handleChange}
        required
      />
      
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
        required
      />
      
      <FormTextArea
        label="Message"
        name="body"
        value={formData.body}
        error={errors.body}
        onChange={handleChange}
        required
      />
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;