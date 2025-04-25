import { div } from "motion/react-client";
import React, { useRef } from "react";
const people = [
  
  
    {
      name: 'AL Mahmud Rakib',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://i.ibb.co.com/7ndJ0bB/Rakib-PP-size.jpg',
    },
    {
      name: 'Michael Foster',
      role: 'Chief Technology Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Dr. Amara Smith',
      role: 'Head of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Cameron Williamson',
      role: 'Lead Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jenny Wilson',
      role: 'Marketing Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Wade Warren',
      role: 'Software Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
   
  ];
  
  


const AboutUs = () => {

  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth', // Smooth scroll
      block: 'start',     // Align to the top of the element
    });
  };

  return (
    <div>
      <div className="container mx-auto p-3">
        <section
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/Qj6F0d2b/pexels-tima-miroshnichenko-6914643.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
                Together We Grow, Together We Achieve.
              </h1>
              <p className="mb-5">
                Our team meet isn’t just about updates and planning — it’s a
                space where ideas spark, bonds strengthen, and new goals take
                shape. This page celebrates the people, the passion, and the
                shared spirit that drive us forward.
              </p>
              <button onClick={scrollToSection} className="border-2 p-2 hover:bg-indigo-600 rounded-md ">Get Started</button>
            </div>
          </div>
        </section>

        {/* meet out team */}

        <section id="team" ref={sectionRef} className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Meet our <span className="text-indigo-600">leadership</span>
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="size-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
