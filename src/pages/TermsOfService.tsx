import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-cactus-bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-stone-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-extrabold text-cactus-dark mb-8">Terms of Service</h1>
          
          <div className="prose prose-stone max-w-none text-stone-600 space-y-6 leading-relaxed">
            <p className="text-sm italic">Last Updated: March 28, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Cactus Apparatus website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">2. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and designs, is the property of Cactus Apparatus unless otherwise stated. You may not reproduce, distribute, or use our content for commercial purposes without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">3. Affiliate Disclosure</h2>
              <p>
                Cactus Apparatus is a participant in the Amazon Services LLC Associates Program and other affiliate advertising programs. These programs are designed to provide a means for sites to earn advertising fees by advertising and linking to partner websites. When you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">4. User Conduct</h2>
              <p>
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                Cactus Apparatus provides information and reviews for general purposes only. We make no warranties about the accuracy or completeness of the information on our website. We are not liable for any damages arising from your use of our website or any products purchased through affiliate links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cactus-dark mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
