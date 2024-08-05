"use client";
import React, { useEffect, useRef, useState } from "react";
import { client, urlFor } from '../client';
import emailjs from "@emailjs/browser";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { FaChevronDown } from "react-icons/fa6";


export function ServiceAndOfferingCards() {
  const [services, setServices] = useState([]); // State to store service data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicesAndOfferings = async () => {
      try {
        // Fetch service data
        const queryService = '*[_type == "service"] | order(priority asc)';
        const serviceData = await client.fetch(queryService);

        // For each service, fetch its offerings
        const promises = serviceData.map(async (service: any) => {
          const queryOffering = `*[_type == "offering" && category == "${service.name}"] | order(priority asc)`;
          const offeringData = await client.fetch(queryOffering);
          console.log(offeringData);

          return {
            category: "",
            title: service.name,
            src: urlFor(service.image).url(),
            content: (
              <>
                <p className="service-description">{service.description}</p>
                {offeringData.map((offering: any, index: any) => (
                  <div
                    key={`offering-content-${index}`}
                    className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                  >
                    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                      <span className="font-bold text-neutral-700">
                        {offering.name}
                      </span>
                    </p>
                    <p>{offering.description}</p>
                    <img
                      src={urlFor(offering.image).url()}
                      alt="Macbook mockup"
                      height="500"
                      width="500"
                      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                  </div>
                ))}
              </>
            ),
          };
        });

        const results: any = await Promise.all(promises);
        setServices(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services and offerings", error);
        setLoading(false);
      }
    };

    fetchServicesAndOfferings();
  }, []);

  // Create cards from fetched services
  const cards = services.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  if (loading) {
    return <div>Loading services...</div>; // Show loading state while fetching
  }

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-center mx-auto text-xl md:text-5xl font-bold pb-4">
        Services
      </h2>
      <p className="text-center font-mono italic">
        People should be given the power of meaningful choices from
        freedom through automation to reducing risk through information
        analytics
      </p>
      <Carousel items={cards} />
    </div>
  );
}


const LandingPage = () => {
  // Set variables to hold the query
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Set variable for data input from contact
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loadingSubmit, setloadingSubmit] = useState(false);

  // Structure the formData
  const { name, email, message } = formData;

  // Set reference for animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  // client connection
  useEffect(() => {
    const fetchData = async () => {
      try {

        // fetch people data
        const queryPeople = '*[_type == "people"] | order(priority asc)';
        client.fetch(queryPeople).then((peopleData) => {
          setPeople(peopleData);
        });

        // loading complete
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // This is for the fancy animations you see on the Teams section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);
    const teamBlocks = document.querySelectorAll('.teamblock');
    teamBlocks.forEach((block) => {
      observerRef.current?.observe(block);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [people]);

  // handle key input for message sent
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Dealing handle submit for contact
  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Warning: All fields must be filled out.');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
      alert('Warning: Please enter a valid email address.');
      return;
    }

    setloadingSubmit(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setloadingSubmit(false);
        setisFormSubmitted(true);
      })
      .catch((error) => {
        setloadingSubmit(false);
        console.error('Error submitting form:', error);
      });

    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowChevron(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="hero min-h-screen flex flex-col justify-center items-center">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-8xl font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Ka Technology
              </span>
            </h1>
            <p className="mb-5">The next generation of AI powered technology</p>
            <div className="flex justify-center">
              <a href="#" className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">
                Coming Soon!
              </a>
            </div>
          </div>
        </div>
        {/* <div className="scrolling-text-container">
          <div className="scrolling-text font-semibold text-2xl">
              ka क க క ಕ ക ক ક କ ਕ ک ꯀ ᱠᱚ 카 កា 开
              ka क க క ಕ ക ক ક କ ਕ ک ꯀ ᱠᱚ 카 កា 开 
              ka क க క ಕ ക ক ક କ ਕ ک ꯀ ᱠᱚ 카 កា 开 
              ka क க క ಕ ക ক ક କ ਕ ک ꯀ ᱠᱚ 카 កា 开 
              ka क க క ಕ ക ক ક କ ਕ ک ꯀ ᱠᱚ 카 កា 开 
          </div>
        </div> */}
        {showChevron && (
          <div className="absolute bottom-10 flex justify-center w-full">
            <FaChevronDown className="animate-bounce text-4xl" />
          </div>
        )}
      </div>
      <div id="services" className="min-h-screen">
      <ServiceAndOfferingCards />
      </div>
      <div id="team" className="hero min-h-screen overflow-x-hidden">
        <div className="text-center hero-content">
          <div className="max-w-max mx-auto px-4">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Meet The Team
              </span>
            </h1>
            <p className="mb-5">The people that made this all possible!</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {people.map((person: { name: any; role: any; image: any; link: any }, index) => (
                <div key={index} className="rounded-xl bg-base-100 shadow-xl teamblock">
                  <figure>
                    <img
                      src={urlFor(person.image).url()}
                      alt="Team Member Images"
                      className="rounded-t-xl object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{person.name}</h2>
                    <p className="role">{person.role}</p>
                    <div className="card-actions">
                      <a href={person.link}>
                        <button className="btn btn-primary">LinkedIn</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="hero min-h-screen overflow-x-hidden">
        <div className="text-center hero-content">
          <div className="max-w-max mx-auto px-4">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="mb-5">
              Get in touch with us at
              <span className="font-semibold"> info@ka-tch.com
              </span>
            </p>
            {!isFormSubmitted ? (
              <div>
                <label className="form-control w-full max-w-xs">
                  <input type="text" placeholder="Full Name" name="name" value={name} onChange={handleChangeInput} className="input input-bordered w-full max-w-xs" />
                  <input type="text" placeholder="Email" name="email" value={email} onChange={handleChangeInput} className="input input-bordered w-full max-w-xs mt-3" />
                  <textarea className="textarea textarea-bordered mt-3" placeholder="Message" name="message" value={message} onChange={handleChangeInput}></textarea>
                </label>
                <button className="btn w-full max-w-xs mt-3 bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600" onClick={handleSubmit}>{loadingSubmit ? 'Sending' : 'Send Message'}</button>
              </div>
            ) : (
              <div>
                <h3>Thank you for contacting us! We will respond as soon as possible!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Ka Technologies</p>
        </aside>
      </footer>
    </div>
  );
};

export default LandingPage;
