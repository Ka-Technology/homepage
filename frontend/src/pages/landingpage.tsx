import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to
              <span className='font-semibold tracking-tight text-left animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'> KaTech</span>
            </h1>
            <p className="mb-5">
              The next generation of AI powered technology.
            </p>
            <div className="flex justify-center">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
