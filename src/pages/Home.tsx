
import Banner from '../components/Banner';

import About from '../sections/About';
import Services from '../sections/ServicesSection';
import CallToAction from '../sections/CallToAction';
import BusinessGoal from '../sections/BusinessGoal';
import Counter from '../sections/CounterSection';
import Projects from '../sections/ProjectsSection';
import Clients from '../sections/ClientsSection';
import Teams from '../sections/TeamSection';
import Testimonials from '../sections/TestimonialsSection';
import AppointmentSection from '../sections/AppointmentSection';
import BlogSection from '../sections/BlogSection';

import useGsapAnimations from '../hooks/useGSAPAnimations';

export default function Home() {
  useGsapAnimations();

  return (
    <>
      <Banner />
      <About />
      <Services />
      <CallToAction />
      <BusinessGoal />
      <Counter />
      <Projects />
      <Clients />
      <Teams />
      <Testimonials />
      <AppointmentSection />
      <BlogSection />
    </>
  );
}
