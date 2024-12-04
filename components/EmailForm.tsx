'use client';

import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [formState, setFormState] = useState({
    description: '',
    companyName: '',
    context: '',
    tone: '',
  });

  const [loading, setLoading] = useState(false);
  const [emailGenerated, setEmailGenerated] = useState(false);
  const [emailContent, setEmailContent] = useState({
    recipient: '',
    subject: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEmailContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateEmail = () => {
    return `
      Hi there,

      I noticed your interest in ${formState.description} and wanted to introduce you to ${formState.companyName}. 
      ${formState.context}

      Let us know if you'd like to explore this further.

      Best regards,
      [Your Name]
      ${formState.tone ? `(${formState.tone})` : ''}
    `;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const emailBody = generateEmail();

      // Update the state to display the editable email section
      setEmailGenerated(true);
      setEmailContent({
        recipient: '',
        subject: `Introduction to ${formState.companyName}`,
        body: emailBody.trim(),
      });
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {!emailGenerated ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Generate a Cold Email</h2>
          <form onSubmit={handleSubmit}>
            {/* Product/Service Description */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="description">
                Product/Service Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChange}
                required
                placeholder="e.g., OutReach is an AI-powered cold Email assistant..."
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Company/Product Name */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="companyName">
                Your Company/Product Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formState.companyName}
                onChange={handleChange}
                required
                placeholder="e.g., OutReachAI"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Context */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="context">
                Context to include in the email
              </label>
              <textarea
                id="context"
                name="context"
                value={formState.context}
                onChange={handleChange}
                required
                placeholder="e.g., I saw your blog and think you might be interested in our product."
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Tone */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="tone">
                Tone (optional)
              </label>
              <input
                type="text"
                id="tone"
                name="tone"
                value={formState.tone}
                onChange={handleChange}
                placeholder="e.g., Friendly, Professional"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {loading ? 'Submitting...' : 'Generate Email'}
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Edit Your Cold Email</h2>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="recipient">
              Recipient's Email Address
            </label>
            <input
              type="email"
              id="recipient"
              name="recipient"
              value={emailContent.recipient}
              onChange={handleEmailContentChange}
              placeholder="e.g., recipient@example.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="subject">
              Email Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={emailContent.subject}
              onChange={handleEmailContentChange}
              placeholder="e.g., Introduction to OutReachAI"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="body">
              Email Content
            </label>
            <textarea
              id="body"
              name="body"
              value={emailContent.body}
              onChange={handleEmailContentChange}
              rows={10}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            onClick={() => alert('Email sent!')} // Replace with actual email-sending logic
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
          >
            Send Email
          </button>
        </>
      )}
    </div>
  );
};

export default EmailForm;
