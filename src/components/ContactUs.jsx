import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useRef } from "react";


const ContactUs = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start',     // Align to the top of the element
      });
    };

  const onSubmitFrom = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "050c4f4f-755a-4391-9a33-5c98a2e7b023");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your message has been sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset();
    }
  };
  AOS.init();
  return (
    <div  className=" ">
      {/* this is a banner  */}
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/Vwxtmz6/wave3.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
              <p className="mb-5">
              Whether you have questions, feedback, or need assistance, our team is ready to assist you. Reach out to us today, and let’s start the conversation. Your success is our priority!
               
              </p>
              <a  onClick={scrollToSection} className=" border-2 p-2">
              Let’s Connect
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div id="contact"  ref={sectionRef} className="hero dark:bg-indigo-950 dark:text-white bg-base-200 py-5 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">
              Get in <span className="text-indigo-700 ">Touch</span>
            </h1>
            <p className="py-6 max-w-2xl">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out. You can contact
              us via email, phone, or by filling out the contact form below. Our
              team is here to assist you and will get back to you as soon as
              possible.
            </p>
            <div className="grid md:grid-cols-2 gap-5 ">
              <a href="tel:+8801741715265">
                <div
                  data-aos="flip-down"
                  data-aos-duration="500"
                  className=" bg-white text-indigo-950    rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                >
                  <FaPhone className="text-4xl  mx-auto mb-3 " />
                  <p>01741715265</p>
                </div>
              </a>

              <a href="mailto:almahmudrkb98@gmail.com">
                <div
                  data-aos="flip-up"
                  data-aos-duration="500"
                  className=" bg-white text-indigo-950  rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                >
                  <MdEmail className="text-4xl  mx-auto mb-3 " />{" "}
                  <p>almahmudrkb98@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/qr/NKB5F2GVENP4F1" target="_blank">
                <div
                  data-aos="flip-down"
                  data-aos-duration="1000"
                  className=" bg-white text-indigo-950  flex items-center mb-5 rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                >
                  {/* <FaWhatsapp className="text-4xl text-purple-700 mx-auto mb-3 " /> */}
                  <img
                    className="w-16  mx-auto"
                    src="https://i.ibb.co.com/LY2g87n/Screenshot-20250104-152020-Whats-App.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/easvHPgwvVQTWJFd6"
                target="_blank"
              >
                <div
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  className=" bg-white  text-indigo-950   rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                >
                  <MdLocationPin className="text-4xl mt-1  text-indigo-950 mx-auto  " />{" "}
                  <p className="">Dhaka, Bangladesh</p>
                </div>
              </a>
            </div>
          </div>
          <div className="card  w-full  max-w-sm shrink-0 dark:bg-indigo-900 shadow-2xl">
            <form onSubmit={onSubmitFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Text Area</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="input text-black pt-3 input-bordered"
                  placeholder="Your Message "
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="text-sm  hover:text-indigo-950  font-bold  py-2 px-3   gap-1 text-white rounded-md btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
