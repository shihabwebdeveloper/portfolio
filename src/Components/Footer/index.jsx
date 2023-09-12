import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  let [logo, setLogo] = useState("");

  useEffect(() => {
    async function menu() {
      const data = await axios.get(
        "http://localhost:1337/api/menus?populate=*"
      );
      setLogo(data.data.data[0].attributes.Logo.data.attributes.url);
    }
    menu();
  }, []);

  return (
    <>
      <div className="flex justify-center bg-background">
        <div className="container flex justify-between py-16">
          <div>
            <img src={`http://localhost:1337${logo}`} alt="logo" />
            <p className="font-poppins font-normal text-lg w-[550px] mt-9 tracking-wide leading-8">
              Want to know more about us? Give us a call or drop us an email and
              we will get back to you as soon as we can.
            </p>
            <a
              className="flex font-poppins font-medium text-black text-xl tracking-wide mt-8"
              href="tel:+8801879900327"
            >
              <IoCall className="text-xl mt-1 mr-3" />
              +8801879900327
            </a>
            <a
              className="flex font-poppins font-medium text-black text-xl mt-4"
              href="mailto:developer.shihab.bd@gmail.com"
            >
              <HiMail className="text-2xl mt-1 mr-3" />
              developer.shihab.bd@gmail.com
            </a>
            <div className="flex mt-8">
              <a
                className="w-14 h-14 rounded-full bg-secondary flex justify-center items-center mr-6"
                href="https://www.facebook.com/mdshihab2001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook className="text-3xl text-white" />
              </a>
              <a
                className="w-14 h-14 rounded-full bg-secondary flex justify-center items-center mr-6"
                href="https://www.linkedin.com/in/mdshihab2001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoLinkedin className="text-3xl text-white" />
              </a>
              <a
                className="w-14 h-14 rounded-full bg-secondary flex justify-center items-center mr-6"
                href="https://www.instagram.com/shihab_1404/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="text-3xl text-white" />
              </a>
              <a
                className="w-14 h-14 rounded-full bg-secondary flex justify-center items-center mr-6"
                href="https://github.com/shihabwebdeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-3xl text-white" />
              </a>
            </div>
          </div>
          <div className="mt-24">
            <h4 className="font-poppins font-normal text-lg tracking-wide ">
              Contact Us
            </h4>
            <h4 className="font-poppins font-normal text-lg tracking-wide mt-4">
              Support Resources
            </h4>
            <h4 className="font-poppins font-normal text-lg tracking-wide mt-4">
              About Us
            </h4>
          </div>
          <div className="mt-28">
            <h4 className="font-poppins font-normal text-lg tracking-wide">
              Blog{" "}
            </h4>
            <h4 className="font-poppins font-normal text-lg tracking-wide mt-4">
              Documentation
            </h4>
            <h4 className="font-poppins font-normal text-lg tracking-wide mt-4">
              Community
            </h4>
            <h4 className="font-poppins font-normal text-lg tracking-wide mt-4">
              Privacy
            </h4>
          </div>
              </div>
              
          </div>
          <div className="flex justify-center items-center py-8 bg-[#D9D9D9]">
                  <p className="font-poppins font-normal text-lg leading-8">Copyright 2023© All rights Reserved. Website Design & SEO Services <span className="font-semibold">By MD Shihab</span></p>
              </div>
    </>
  );
};

export default Footer;
