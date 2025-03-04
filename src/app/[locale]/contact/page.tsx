'use client'
import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'
import { MantineProvider } from '@mantine/core';
import '@radix-ui/themes/styles.css'
import * as radixUI from '@radix-ui/themes';
import UserInfoIcons from '../components/userInfoCard';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

    const handleSubmit = async (e: any) => {
      e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send email.');
    }
  };

  return (
    <>
    <head>
      <title>Contact</title>
    </head>
    <div className="flex flex-col min-h-screen">
  <main className="flex-grow px-32 py-24 text-center text-2xl">
    {/* User Info Section */}
    <div className="flex justify-center items-start space-x-10">
      {/* User Info Component */}
      <MantineProvider>
        <div className="flex flex-col items-center">
          <UserInfoIcons />
        </div>
      </MantineProvider>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Send Email
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</div>
  </>
  )
}
