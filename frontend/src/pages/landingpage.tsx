import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className='circlePosition w-[1600px] h-[1400px] bg-[#ff7dad]
      rounded-[100%] absolute z-1 top-[05%] left-[15%] blur-[105px] opacity-20 animate-move1'>
      </div>
      <div className='circlePosition w-[1600px] h-[800px] bg-[#ffa733]
      rounded-[100%] absolute z-1 top-[5%] left-[0%] blur-[105px] opacity-30 animate-move2'>
      </div>
      <div className='circlePosition w-[1200px] h-[600px] bg-[#52ff97]
      rounded-[100%] absolute z-1 top-[60%] left-[65%] blur-[105px] opacity-30 animate-move3'>
      </div>
      <div className='circlePosition w-[900px] h-[700px] bg-[#864aff]
      rounded-[100%] absolute z-1 top-[50%] left-[5%] blur-[105px] opacity-30 animate-move4'>
      </div>
      <div className='circlePosition w-[1200px] h-[800px] bg-[#4aa7ff]
      rounded-[100%] absolute z-1 top-[10%] left-[45%] blur-[105px] opacity-30 animate-move5'>
      </div>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"> KaTech</span>
            </h1>
            <p className="mb-5">
              The next generation of AI powered technology.
            </p>
            <div className="flex justify-center">
              <a href="#" className="btn btn-primary">Coming Soon!</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
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

      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-max mx-auto px-4">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="font-bold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"> 
                Meet The Team
              </span>
            </h1>
            <p className="mb-5">
              From the brains of the operations to the developers that make it all happen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-45 pt-25">
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

    </div>
  );
}

export default LandingPage;
