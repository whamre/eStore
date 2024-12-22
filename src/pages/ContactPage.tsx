import React from 'react';
import { MessageSquare } from '../components/icons';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <MessageSquare className="w-16 h-16 mx-auto text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;