import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function TermOfUse() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar />
      <div className="lg:mt-[120px] mt-[100px] mx-auto">
        <h2 className="text-center font-bold lg:text-3xl text-2xl">
          Flyket Website Terms of Use
        </h2>
        <h3 className="text-center lg:text-lg mt-2">
          Legal Information and Notices
        </h3>
        <div className="w-full text-justify lg:px-10 lg:py-4 md:my-3 p-3">
          <p>
            <b>Acceptance of terms:</b> By using the Flyket platform, you agree
            to be bound by these terms of use. If you do not agree to these
            terms, do not use the Flyket platform.
          </p>
          <p>
            <b>Modification of terms:</b> Flyket reserves the right to modify
            these terms of use at any time. If we make changes to these terms,
            we will post the revised terms on the Flyket platform and update the
            "Last Updated" date at the top of this page. Your continued use of
            the Flyket platform after any such changes constitutes your
            acceptance of the new terms.
          </p>
          <p>
            <b>Eligibility:</b> You must be at least 18 years of age to use the
            Flyket platform. By using the Flyket platform, you represent and
            warrant that you have the right, authority, and capacity to enter
            into these terms of use and to abide by all of the terms and
            conditions set forth herein.
          </p>
          <p>
            <b>Use of the Flyket platform:</b> The Flyket platform is provided
            for your personal, non-commercial use. You may not use the Flyket
            platform for any illegal or unauthorized purpose. You may not use
            the Flyket platform in any way that could damage, disable,
            overburden, or impair the Flyket platform or interfere with any
            other party's use and enjoyment of the Flyket platform.
          </p>
          <p>
            <b>Intellectual property:</b> The content on the Flyket platform,
            including but not limited to text, graphics, logos, images, and
            software, is the property of Flyket and is protected by copyright
            and other intellectual property laws. You may not use any content on
            the Flyket platform for any commercial purpose without the express
            written consent of Flyket.
          </p>
          <p>
            <b>Disclaimer of warranties:</b> The Flyket platform is provided on
            an "as is" and "as available" basis. Flyket makes no representations
            or warranties of any kind, express or implied, as to the operation
            of the Flyket platform or the information, content, materials, or
            products included on the Flyket platform. Flyket does not warrant
            that the Flyket platform will be uninterrupted or error-free.
          </p>
          <p>
            <b>Limitation of liability:</b> Flyket shall not be liable for any
            damages of any kind arising from the use of the Flyket platform,
            including but not limited to direct, indirect, incidental, punitive,
            and consequential damages.
          </p>
          <p>
            <b>Indemnification:</b> You agree to indemnify and hold Flyket and
            its affiliates, officers, agents, and employees harmless from any
            claim or demand, including reasonable attorneys' fees, made by any
            third party due to or arising out of your use of the Flyket
            platform, your violation of these terms of use, or your violation of
            any rights of another.
          </p>
          <p>
            <b>Governing law:</b> These terms of use and your use of the Flyket
            platform shall be governed by and construed in accordance with the
            laws of the State of Indonesia, without giving effect to any
            principles of conflicts of law.
          </p>
          <p>
            <b>Dispute resolution:</b> Any dispute arising out of or relating to
            these terms of use or the Flyket platform shall be resolved through
            binding arbitration in accordance with the rules in the State of
            Indonesia.
          </p>
          <p className="mt-5">
            By using the Flyket platform, you acknowledge that you have read and
            understand these terms of use and agree to be bound by them. If you
            have any questions about these terms of use, please{' '}
            <Link to={'/contactUs'} className="text-primary">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
