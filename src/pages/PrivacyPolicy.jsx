import HeroSection from '../components/HeroSection';
import useScrollAnimation from '../hooks/useScrollAnimation';

function PrivacyPolicy() {
  useScrollAnimation();

  return (
    <div>
      <HeroSection
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="scroll-animate">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                This privacy notice discloses the privacy practices for
                (www.hollingsheadharbor.com). This privacy notice applies solely to information
                collected by this website. It will notify you of the following:
              </p>

              <ul className="space-y-3 text-gray-600 mb-12">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    What personally identifiable information is collected from you through the
                    website, how it is used and with whom it may be shared.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>What choices are available to you regarding the use of your data.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    The security procedures in place to protect the misuse of your information.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>How you can correct any inaccuracies in the information.</span>
                </li>
              </ul>
            </div>

            <div className="scroll-animate">
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  Information Collection, Use, and Sharing
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We are the sole owners of the information collected on this site. We only have
                    access to/collect information that you voluntarily give us via email or other
                    direct contact from you. We will not sell or rent this information to anyone.
                  </p>
                  <p>
                    Information collected through the form, including phone numbers, is used solely
                    for the purpose of responding to inquiries. If you provide a mobile phone
                    number, you consent to receive SMS text messages related to your inquiry. We do
                    not retain or store this information beyond the completion of your request and
                    do not use it for any other purpose unless specified. We ensure compliance with
                    all relevant regulations regarding SMS communication and user consent.
                  </p>
                  <p>
                    We will use your information to respond to you, regarding the reason you
                    contacted us. We will not share your information with any third party outside of
                    our organization, other than as necessary to fulfill your request, e.g. to ship
                    an order.
                  </p>
                  <p className="font-semibold text-gray-900">
                    SMS consent is not shared with third parties.
                  </p>
                  <p>
                    Unless you ask us not to, we may contact you via email in the future to tell you
                    about specials, new products or services, or changes to this privacy policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-blue-800 rounded-2xl p-8 mb-12 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </span>
                  SMS Terms of Service
                </h2>
                <div className="space-y-4 text-blue-100">
                  <p>
                    By opting into SMS from a web form or other medium, you are agreeing to receive
                    SMS messages from Hollingshead Harbor.
                  </p>
                  <p>
                    This includes SMS messages for conversations (external), conversations (between
                    employees). Message frequency varies. Message and data rates may apply.
                  </p>
                  <p>
                    See privacy policy at{' '}
                    <a
                      href="https://www.hollingsheadharbor.com/privacy"
                      className="text-white underline hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.hollingsheadharbor.com/privacy
                    </a>
                  </p>
                  <div className="bg-white/10 rounded-xl p-4 mt-6">
                    <p className="font-semibold text-white">
                      Message HELP for help. Reply STOP to any message to opt out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                  Your Access to and Control Over Information
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    You may opt out of any future contacts from us at any time. You can do the
                    following at any time by contacting us via the email address or phone number
                    given on our website:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      See what data we have about you, if any.
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Change/correct any data we have about you.
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Have us delete any data we have about you.
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Express any concern you have about our use of your data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  Security
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We take precautions to protect your information. When you submit sensitive
                    information via the website, your information is protected both online and
                    offline.
                  </p>
                  <p>
                    Wherever we collect sensitive information (such as credit card data), that
                    information is encrypted and transmitted to us in a secure way. You can verify
                    this by looking for a lock icon in the address bar and looking for "https" at
                    the beginning of the address of the Web page.
                  </p>
                  <p>
                    While we use encryption to protect sensitive information transmitted online, we
                    also protect your information offline. Only employees who need the information
                    to perform a specific job (for example, billing or customer service) are granted
                    access to personally identifiable information. The computers/servers in which we
                    store personally identifiable information are kept in a secure environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-animate">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
                <p className="text-gray-600 mb-6">
                  If you feel that we are not abiding by this privacy policy, you should contact us
                  immediately:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:6153551028"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (615) 355-1028
                  </a>
                  <a
                    href="mailto:info@hollingsheadharbor.com"
                    className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
