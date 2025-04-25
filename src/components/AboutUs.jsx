import { div } from "motion/react-client";
import React from "react";

const AboutUs = () => {
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
              <h1 className="mb-5 text-5xl font-bold">Together We Grow, Together We Achieve.</h1>
              <p className="mb-5">
              Our team meet isn’t just about updates and planning — it’s a space where ideas spark, bonds strengthen, and new goals take shape. This page celebrates the people, the passion, and the shared spirit that drive us forward.
                
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default AboutUs;
