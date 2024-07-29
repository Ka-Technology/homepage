import React, { useEffect, useRef, useState } from "react";
import { CardDemo } from "../components/ui/animatedcard"
import {client, urlFor} from '../client';
import emailjs from "@emailjs/browser";
import { PortableText } from "@portabletext/react";

const LandingPage = () => {

  // Set variables to hold the query
  const [people, setPeople] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceOverviews, setServiceOverviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Set variable for data input from contact
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loadingSubmit, setloadingSubmit] = useState(false);

  // Structure the formData
  const {name, email, message} = formData;

  // Set reference for animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  // client connection
  useEffect(() => {
    const fetchData = async() => {
      try {
        // fetch service data
        const queryService = '*[_type == "service"] | order(priority asc)';
        client.fetch(queryService).then((serviceData) => {
          setServices(serviceData);
          });


        // fetch service overview data
        const queryServiceOverview = '*[_type == "service_overview"] | order(priority asc)';
        client.fetch(queryServiceOverview).then((serviceOverviewData) => {
          setServiceOverviews(serviceOverviewData);
        });

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
      threshold: 0.1
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);
    const teamBlocks = document.querySelectorAll('.teamblock');
    teamBlocks.forEach(block => {
      observerRef.current?.observe(block);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [people]);

  // handle key input for message sent
  const handleChangeInput = (e: any) => {
    const {name, value} = e.target;
    
    setFormData({ ...formData, [name]: value});
  }

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
    }

    client.create(contact)
        .then(() => {
            setloadingSubmit(false);
            setisFormSubmitted(true);
        })
        .catch(error => {
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


  

  // const handleScroll = () => {
  //   const sections = document.querySelectorAll('.scroll-section') as NodeListOf<HTMLElement>;
  //   const stickyImage = document.getElementById('sticky-image') as HTMLImageElement;
  //   const scrollY = window.scrollY;
  //   const threshold = window.innerHeight / 2;

  //   sections.forEach((section, index) => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.offsetHeight;

  //     if (scrollY >= sectionTop - threshold && scrollY < sectionTop + sectionHeight - threshold) {
  //       if (stickyImage) {
  //         if (stickyImage.dataset.src !== serviceImages[index]) {
  //           stickyImage.style.opacity = '0';
  //           setTimeout(() => {
  //             stickyImage.src = serviceImages[index];
  //             stickyImage.dataset.src = serviceImages[index];
  //             stickyImage.style.opacity = '1'; 
  //           }, 150);
  //         }
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  if (loading) {
    return <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-8xl font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Ka Technology
              </span>
            </h1>
            <p className="mb-5">The next generation of AI powered technology.</p>
            <div className="flex justify-center">
              <a href="#" className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">
                Coming Soon!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="hero min-h-screen">
        <div className="text-center hero-content">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"> 
                Services
              </span>
            </h1>
            <p className="mb-5">
            It's our belief at Ka Technology that people should be given the power of meaningful choices. These choices come from technology that provides freedom through automation and reduced risk through information analytics. Here are some of the ways in which we provide you with more choice.
            </p>

            <div className="flex">
              <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center">
                  <CardDemo />
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                {services.map((service: {name: any, description: any}, index) => (
                  <div key={index} className="scroll-section min-h-screen p-8 flex items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
                      <p className="text-lg ">
                        <PortableText value={service.description} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
            
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {serviceOverviews.map((serviceOverview: {name: any, description: any, slug: any}, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            {/* add the simple icon instead of the image here */}
            <figure className="px-15 pt-15">
              <img
                src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                alt="AI Database"
                className="rounded-xl" />
            </figure>
            <div  className="card-body items-center text-center">
              <h2 className="card-title">{serviceOverview.name}</h2>
                <p>{serviceOverview.description}</p>
                <div className="card-actions">
                  {/* Add the slug link later once we have template pages for the rate and such */}
                  <button className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">See Rates</button> 
                </div>

            </div>
        </div>
        ))}
      </div>

      <div id="team" className="hero min-h-screen">
        <div className="text-center hero-content">
          <div className="max-w-max mx-auto px-4">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Meet The Team
              </span>
            </h1>
            <p className="mb-5">The people that made this all possible!</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {people.map((person: { name: any; role: any; image: any; link: any, about: any }, index) => (
                <div key={index} className="card bg-base-100 shadow-xl teamblock">
                  <figure className="px-15 pt-15">
                    <img
                      src={urlFor(person.image).url()}
                      alt="AI Analytics"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{person.name}</h2>
                    <p className="role">{person.role}</p>
                    <p className="about">{person.about}</p>
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

      <div id="contact" className="hero min-h-screen">
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
            {!isFormSubmitted ? 
            <div>
              <label className="form-control w-full max-w-xs">
                <input type="text" placeholder="Full Name" name="name" value={name} onChange={handleChangeInput} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Email" name="email" value={email} onChange={handleChangeInput} className="input input-bordered w-full max-w-xs mt-3" />
                <textarea className="textarea textarea-bordered mt-3" placeholder="Message" name="message" value={message} onChange={handleChangeInput}></textarea>
              </label>
              <button className="btn w-full max-w-xs mt-3  bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600" onClick={handleSubmit}>{loadingSubmit ? 'Sending': 'Send Message'}</button>
            </div>
            :
            <div>
              <h3>Thank you for contacting us! We will respond as soon as possible!</h3>
              </div>}
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
}

export default LandingPage;
