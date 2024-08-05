import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const services = [
    {
      title: 'Consultancy',
      description: 'Our expert team provides personalized medical consultancy to ensure you receive the best healthcare solutions tailored to your needs.',
      icon: '🩺',
    },
    {
      title: 'Our Specialists',
      description: 'Connect with top healthcare specialists in various fields. We offer access to a wide range of experts for all your medical concerns.',
      icon: '👨‍⚕️',
    },
    {
      title: 'Patient Portal',
      description: 'Easily access your medical records, appointments, and prescriptions through our secure and user-friendly patient portal.',
      icon: '💻',
    },
    {
      title: 'Research & Development',
      description: 'Contributing to medical advancements through innovative research and development. Stay updated with our latest findings.',
      icon: '🔬',
    },
    {
      title: 'Pharmacy Integration',
      description: 'Seamlessly connect with your local pharmacy to manage prescriptions and refills directly through our platform.',
      icon: '💊',
    },
    {
      title: 'Telemedicine',
      description: 'Consult with healthcare professionals from the comfort of your home using our telemedicine services.',
      icon: '📞',
    },
    {
      title: 'Health Monitoring',
      description: 'Track and monitor your health metrics with our integrated tools and devices for better health management.',
      icon: '📊',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Easily schedule, reschedule, or cancel appointments with your healthcare providers through our intuitive scheduling system.',
      icon: '📅',
    },
    {
      title: 'Insurance Management',
      description: 'Manage your health insurance details, claims, and benefits with ease using our comprehensive insurance management tools.',
      icon: '📑',
    },
    {
      title: 'Wellness Programs',
      description: 'Participate in wellness programs designed to promote healthy living and preventive care.',
      icon: '🏋️',
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg text-center h-72 ">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2">{service.title}</h3>
              <p className="text-zinc-600">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
