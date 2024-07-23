import React, { useEffect } from "react";

const LandingPage = () => {
  const images = [
    'https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop',
    'https://products.ls.graphics/mesh-gradients/images/29.-Pale-Cornflower-Blue_1.jpg',
    'https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-02.jpg',
  ];

  const sections = [
    {
      title: 'AI Database',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'AI Analytics',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'AI Support',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll('.scroll-section') as NodeListOf<HTMLElement>;
    const stickyImage = document.getElementById('sticky-image') as HTMLImageElement;
    const scrollY = window.scrollY;
    const threshold = window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop - threshold && scrollY < sectionTop + sectionHeight - threshold) {
        if (stickyImage) {
          if (stickyImage.dataset.src !== images[index]) {
            stickyImage.style.opacity = '0';
            setTimeout(() => {
              stickyImage.src = images[index];
              stickyImage.dataset.src = images[index];
              stickyImage.style.opacity = '1'; 
            }, 150);
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                <img id="sticky-image" src={images[0]} data-src={images[0]} alt="Sticky" className="rounded-xl max-w-full max-h-full object-contain transition-opacity duration-300" />
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                {sections.map((section, index) => (
                  <div key={index} className="scroll-section min-h-screen p-8 flex items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                      <p className="text-lg ">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>  
            

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Database"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">AI Database</h2>
                  <p>Automate your business with the AI Database</p>
                  <div className="card-actions">
                    <button className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">See Rates</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Analytics"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">AI Analytics</h2>
                  <p>Gain insights with AI-powered analytics</p>
                  <div className="card-actions">
                    <button className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">See Rates</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Support"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">AI Support</h2>
                  <p>24/7 AI-powered customer support</p>
                  <div className="card-actions">
                    <button className="btn bg-katech-red border-katech-red text-white hover:bg-red-600 hover:border-red-600">See Rates</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div className="card bg-base-100 shadow-xl teamblock">
                <figure className="px-45 pt-25">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Database"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Santosh</h2>
                  <p>Co-Founder and President of Ka Group</p>
                  <div className="card-actions">
                    <a href="https://www.linkedin.com/in/santoshramesh/">
                    <button className="btn btn-primary">LinkedIn</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl teamblock">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Analytics"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Ken</h2>
                  <p>Co-Founder and Web Developer</p>
                  <div className="card-actions">
                    <a href="https://www.linkedin.com/in/kennethleekang/">
                    <button className="btn btn-primary">LinkedIn</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl teamblock">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Support"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Peter</h2>
                  <p>Co-Founder and Software Engineer</p>
                  <div className="card-actions">
                    <a href="https://www.linkedin.com/in/peterluey/">
                    <button className="btn btn-primary" >LinkedIn</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl teamblock">
                <figure className="px-15 pt-15">
                  <img
                    src="https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop"
                    alt="AI Support"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Andrew</h2>
                  <p>Co-Founder and Web Developer</p>
                  <div className="card-actions">
                    <a href="https://www.linkedin.com/in/theandrewdang/">
                    <button className="btn btn-primary">LinkedIn</button>
                    </a>
                  </div>
                </div>
              </div>
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
