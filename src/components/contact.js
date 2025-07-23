import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h9zpysf',        // ✅ Your EmailJS service ID
        'template_5rx3a2t',       // ✅ Your EmailJS template ID
        form.current,
        'GFhbj6TIWTscjgnmL'       // ✅ Your EmailJS public key
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send message.');
        console.error(error);
      });
  };

  return (
    <div>
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">Contact</p>
            <h2 className="font-heading mb-20 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              <span className="text-green-500">Get i</span>n Touch
            </h2>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side Info */}
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Have a project for me? Any questions about something I've built? I'd love to hear from you.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-white">
                      <FiMapPin className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-green-900 dark:text-white">My Address</h3>
                      <p className="text-gray-600 dark:text-slate-400">Bangalore, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-white">
                      <FiPhone className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-green-900 dark:text-white">Contact</h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile: +91 8660808781</p>
                      <p className="text-gray-600 dark:text-slate-400">Mail: nithinwirks@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Side Form */}
              <div className="card h-fit max-w-6xl" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-green-900 text-white px-6 py-3 font-semibold rounded-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
