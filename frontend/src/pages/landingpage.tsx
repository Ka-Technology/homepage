import React, { useEffect, useState } from "react";
import {client, urlFor} from '../client';

const LandingPage = () => {

  // Set the variable to hold the query
  const [people, setPeople] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceOverviews, setServiceOverviews] = useState([]);
  const [loading, setLoading] = useState(true);

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
              Offering the future of your business today.
            </p>

            <div className="flex">
              <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center">
                  <p>Animate Icon Placer</p>
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                {services.map((service: {name: any, description: any}, index) => (
                  <div key={index} className="scroll-section min-h-screen p-8 flex items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
                      <p className="text-lg ">{service.description}</p>
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
            <p className="mb-5">
              The people that made this all possible!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {people.map((person: {name: any, role: any, image: any, link: any}, index) =>
              <div key={index} className="card bg-base-100 shadow-xl teamblock">
              <figure className="px-15 pt-15">
                <img
                  src={urlFor(person.image).url()}
                  alt="AI Analytics"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{person.name}</h2>
                <p>{person.role}</p>
                <div className="card-actions">
                  <a href={person.link}>
                  <button className="btn btn-primary">LinkedIn</button>
                  </a>
                </div>
              </div>
            </div>
              )}
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
