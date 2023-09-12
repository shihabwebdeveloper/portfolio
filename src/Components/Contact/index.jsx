import React, { useEffect, useState } from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center h-screen pt-20">
        <div className="container">
          <div className="w-full">
            <div className="flex flex-col  items-center w-full">
              <h1 className="font-montserrat font-bold text-4xl text-gray-800">
                GET IN TOUCH
              </h1>
              <h3 className="font-poppins font-normal text-xl text-center mt-5 w-[500px]">
                I’m available for freelance work.Connect with me via sent an
                E-mail into my account.
              </h3>
            </div>
            <div className="flex flex-wrap justify-between">
              <input
                className="w-[750px] mt-10 border font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-2xl px-2.5 py-3"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="w-[750px] mt-10 border font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-2xl px-2.5 py-3"
                placeholder="Your Mail"
                type="text"
              />
              <input
                className="w-full mt-10 border font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-2xl px-2.5 py-3"
                placeholder="Your Subject"
                type="text"
              />
              <textarea
                className="w-full mt-10 h-64 border font-poppins text-base font-semibold placeholder-font-ranga placeholder-font-normal placeholder-text-2xl placeholder-text-top pl-2.5 pt-3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="flex justify-center w-full bg-gray-800 text-white font-poppins font-bold text-2xl py-2 tracking-wider mt-10 rounded-sm">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
