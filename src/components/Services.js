import React from 'react';
import Slider from './Slider'

export default function Services() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-zinc-900 mb-12 text-center">Our Services</h2>
        <p className="text-lg text-zinc-600 mb-8 text-center">
          At MediTail, we are dedicated to revolutionizing the way medical records and prescription details are managed. Our platform offers a comprehensive suite of services designed to enhance the efficiency, accuracy, and accessibility of healthcare information for both patients and healthcare professionals.
        </p>
        <div>  <Slider /> </div>  <br /> <br />

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: '1. Centralized Medical Record Management',
              description: 'MediTail provides a secure, centralized platform where patients\' complete medical histories. These includes:',
              items: [
                'Diagnosis Records: Detailed information on past and current diagnoses.',
                'Treatment History: Records of all treatments, procedures, and their outcomes.',
              ],
            },
            {
              title: '2. Seamless Integration of New Treatments',
              description: 'Our platform allows healthcare professionals to integrate new treatments with a patient’s existing medical data, ensuring:',
              items: [
                'Prevention of Drug Interactions: Comprehensive checks to avoid adverse drug interactions.',
                'Avoidance of Redundant Procedures: Ensuring that unnecessary tests and procedures are not repeated.',
              ],
            },
            {
              title: '3. Enhanced Patient Engagement',
              description: 'MediTail empowers patients by giving them full access to their medical records, fostering active participation in their healthcare journey. Features include:',
              items: [
                'User-Friendly Interface: Designed for ease of use, allowing patients to navigate their medical history with minimal effort.',
                '24/7 Access: Patients can access their records anytime, anywhere.',
              ],
            },
            {
              title: '4. Support for Medical Research',
              description: 'MediTail contributes to the advancement of medical research by providing anonymized datasets. Researchers can utilize this data to:',
              items: [
                'Analyze Health Trends: Uncover broader healthcare insights and trends.',
                'Advance Medical Knowledge: Contribute to the development of new treatments and healthcare solutions.',
              ],
            },
            {
              title: '5. Security and Compliance',
              description: 'We understand the importance of protecting sensitive medical information. MediTail is built with industry-leading security protocols to ensure that all data is:',
              items: [
                'Encrypted: Safeguarding patient information against unauthorized access.',
                'Compliant: Adhering to global healthcare regulations and standards.',
              ],
            },
            {
              title: '6. Collaborative Healthcare',
              description: 'MediTail fosters a collaborative relationship between patients and healthcare providers. By ensuring transparency and enhancing communication, we help improve:',
              items: [
                'Patient Outcomes: Through informed decision-making and comprehensive care planning.',
                'Healthcare Systems: By promoting efficient and patient-centered care delivery.',
              ],
            },
          ].map((service, index) => (
            <div key={index} className="group flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 boxShadowWhite w-full sm:w-1/2 md:w-1/4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-zinc-600 space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
