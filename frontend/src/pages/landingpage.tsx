import React from "react";

const LandingPage = () => {
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
              <a href="#" className="btn bg-katech-red">
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
                    <button className="btn btn-primary">See Rates</button>
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
                    <button className="btn btn-primary">See Rates</button>
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
                    <button className="btn btn-primary">See Rates</button>
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
                    <button className="btn btn-primary">LinkedIn</button>
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
                    <button className="btn btn-primary">LinkedIn</button>
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
                    <button className="btn btn-primary">LinkedIn</button>
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
                    <button className="btn btn-primary">LinkedIn</button>
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
            {/* Add your contact form or information here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
