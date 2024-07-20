"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";



const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--base-200),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Test
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero min-h-screen bg-base-200">
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

      <div className="flex-1">
        <StickyScroll content={content} />
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
                  <h2 className="card-title">Santosh</h2>
                  <p>Co-Founder and President of Ka Group</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">LinkedIn</button>
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
                  <h2 className="card-title">Ken</h2>
                  <p>Co-Founder and Vice President</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">LinkedIn</button>
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
                  <h2 className="card-title">Peter</h2>
                  <p>Co-Founder and Lead Software Engineer</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">LinkedIn</button>
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
                  <h2 className="card-title">Andrew</h2>
                  <p>Co-Founder and Lead Web Developer</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">LinkedIn</button>
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
