import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-stone-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-extrabold text-cactus-dark mb-8">Privacy Policy</h1>
          
          <div className="prose prose-stone max-w-none text-stone-600 space-y-6 leading-relaxed">
            <p className="text-sm italic">Last Updated: March 28, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Cactus Apparatus ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email</li>
                <li>Interact with our social media accounts</li>
              </ul>
              <p>
                This information may include your name, email address, and any other details you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our website</li>
                <li>Send you newsletters and updates (if you've subscribed)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze website usage to improve our content and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">4. Affiliate Disclosure</h2>
              <p>
                Cactus Apparatus is a participant in the Amazon Services LLC Associates Program and other affiliate advertising programs. These programs are designed to provide a means for sites to earn advertising fees by advertising and linking to partner websites. When you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">5. Cookies and Tracking</h2>
              <p>
                We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:cactusapparatus.shop@gmail.com" className="text-cactus-green font-bold hover:underline">cactusapparatus.shop@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
