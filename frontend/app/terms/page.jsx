export default function TermsPage() {
    return (
      <div className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
  
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Terms & Conditions
          </h1>
  
          <p className="text-gray-600 mb-6">
            Welcome to our IT services platform. By accessing or using our
            services, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
  
          {/* 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              1. Services
            </h2>
            <p className="text-gray-600">
              We provide professional IT services including web development,
              software development, consulting, maintenance, and digital
              solutions. All services will be delivered as per agreed project
              scope, timeline, and contract.
            </p>
          </section>
  
          {/* 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              2. Client Responsibilities
            </h2>
            <p className="text-gray-600">
              Clients must provide accurate information, required project
              materials, timely feedback, and approvals. Delays in communication
              may affect project timelines.
            </p>
          </section>
  
          {/* 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              3. Payments & Billing
            </h2>
            <p className="text-gray-600">
              Payments must be made according to the agreed pricing structure.
              Failure to complete payments may result in suspension of services.
              All fees are non-refundable unless otherwise stated in writing.
            </p>
          </section>
  
          {/* 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              Upon full payment, clients will own the final deliverables unless
              otherwise specified. We reserve the right to showcase completed
              projects in our portfolio unless agreed otherwise.
            </p>
          </section>
  
          {/* 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              5. Confidentiality
            </h2>
            <p className="text-gray-600">
              We maintain strict confidentiality of all client information and
              project data. Sensitive data will not be shared with third parties
              without prior consent.
            </p>
          </section>
  
          {/* 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not liable for indirect, incidental, or consequential
              damages arising from the use of our services. Clients are
              responsible for maintaining backups of their data.
            </p>
          </section>
  
          {/* 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              7. Termination
            </h2>
            <p className="text-gray-600">
              Either party may terminate the agreement with written notice.
              Outstanding payments must be settled before termination is finalized.
            </p>
          </section>
  
          {/* 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to update these terms at any time. Continued
              use of our services after updates constitutes acceptance of the
              revised terms.
            </p>
          </section>
  
          <div className="mt-12 text-center text-sm text-gray-500">
            Last updated: {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
  }