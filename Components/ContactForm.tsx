const ContactForm: React.FC = () => {
  return (
    <>
      {" "}
      {/* Start of contact form */}
      <div
        className="w-full h-auto flex items-start justify-start flex-col lg:flex-row p-5 pt-10 lg:p-0 lg:py-10"
        id="ContactForm"
      >
        <div className="w-full lg:w-1/2 h-full flex flex-col py-5 gap-3 justify-between">
          <div className="w-full h-auto">
            <h4 className="uppercase   font-extrabold lg:text-xl lg:w-full lg:text-left   text-secondary">
              Schedule Your Free Audit Call With Samir
            </h4>
            <h3 className="text-2xl  font-bold lg:text-3xl lg:w-full lg:text-left   text-black">
              Are You Ready To Take Your Business To The Next Level?
            </h3>
          </div>
          <p className="text-sm text-gray-500 ">
            And there you have it. You now know what we do, who we’ve done it
            for, and most importantly, our testimonials. So, if you understand
            that your marketing isn’t as polished as it should be, schedule
            yourself in for a call with our founder and CEO Samir for a free
            consultation call.
          </p>

          <p className="text-sm text-gray-500 ">
            We’re not wishing for success, we’re engineering it. Every move we
            make, every strategy we implement, and every piece of content we
            create is designed with one goal: delivering real results for you.
            We don’t pitch anything and everything you don’t need, we pitch
            <b> results</b> because ultimately, that’s what counts.
          </p>
          <h4 className="uppercase   font-extrabold lg:text-xl lg:w-full lg:text-left   text-secondary">
            This audit call is perfect for:
          </h4>
          {/* Start of ticks */}
          <div className="w-full h-auto flex justify-start items-start gap-5">
            <div className="w-auto flex h-full justify-start items-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-auto h-auto flex justify-start items-start">
              <p className="text-gray-500 text-sm">
                Individuals looking to scale their business and hit the ground
                running with their digital marketing.
              </p>
            </div>
          </div>
          {/* Tick 2 */}
          <div className="w-full flex justify-start items-start gap-5">
            <div className="w-auto flex h-full justify-start items-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-auto h-auto flex justify-start items-start">
              <p className="text-gray-500 text-sm">
                Business owners looking to move their business to the online
                digital landscape and get a head start without making the
                mistakes every beginner makes.
              </p>
            </div>
          </div>
          {/* Tick 3 */}
          <div className="w-full flex justify-start items-start gap-5">
            <div className="w-auto flex h-full justify-start items-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-auto h-auto flex justify-start items-start">
              <p className="text-gray-500 text-sm">
                Marketing teams looking to expand their reach and generate
                results for their companies with the use of our services.
              </p>
            </div>
          </div>
          {/* Tick 4 */}
          <div className="w-full flex justify-start items-start gap-5">
            <div className="w-auto flex h-full justify-start items-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-auto h-auto flex justify-start items-start">
              <p className="text-gray-500 text-sm">
                Brands looking to multiply their revenue with our tried and
                tested marketing methods to scale their ROI.
              </p>
            </div>
          </div>
          {/* Tick 5 */}
          <div className="w-full flex justify-start items-start gap-5">
            <div className="w-auto flex h-full justify-start items-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-auto h-auto flex justify-start items-start">
              <p className="text-gray-500 text-sm">
                Local to large scale enterprise businesses of any industry
                looking to get expert, tailored strategies implemented into
                their marketing schemes.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-1/2 flex items-center justify-start">
          <iframe
            src="https://calendly.com/samirbaloushi/1-on-1-meeting"
            className=" flex-grow w-full h-screen 3xl:h-[50vh]"
          />
        </div>
      </div>
    </>
  );
};
export default ContactForm;
