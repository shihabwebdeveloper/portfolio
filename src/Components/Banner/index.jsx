import React, { useEffect, useState } from "react";
import axios from "axios";

// http://localhost:1337/api/banners?populate=*

const Banner = () => {
  let [data, setData] = useState("");
  let [bannerimg, setBannerimg] = useState("");
  let [button, setButton] = useState([]);

    const downloadCV = () => {
      const cvUrl = '../../images/Resume-Shihab.pdf'; // Update the path to your CV file
  
      // Create a link element
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Shihab-Resume.pdf'; // Specify the desired download filename
  
      // Trigger a click event on the link to initiate the download
      link.click();
    };
  

  useEffect(() => {
    async function menu() {
      const data = await axios.get(
        "http://localhost:1337/api/banners?populate=*"
      );
      setData(data.data.data[0].attributes);
      setBannerimg(
        data.data.data[0].attributes.banner_image.data.attributes.url
      );
      setButton(data.data.data[0].attributes.banner_button);
    }
    menu();
  }, []);

  return (
    <>
      <div className="bg-background flex justify-center h-screen relative z-0">
        <img
          className="absolute top-[70px] left-0"
          src="../../images/bannerbg1.png"
        />
        <img
          className="absolute bottom-1 right-0"
          src="../../images/bannerbg2.png"
        />

        <div className="container flex">
          <div className="flex items-center">
            <div className="w-[600px] h-[600px] rounded-full overflow-hidden z-20 border-[18px] mt-[100px] shadow-xl border-white">
              <img src={`http://localhost:1337${bannerimg}`} />
            </div>
          </div>
          <div className="flex items-center">
            <div className=" ml-24">
              <h3 className="font-poppins font-normal leading-7 text-xl">
                {data.banner_greetings}
              </h3>
              <h1 className="font-montserrat font-extrabold text-6xl mt-5">
                {data.banner_title}
              </h1>
              <h2 className="font-montserrat font-extrabold text-secondary text-[52px] mt-4 animation">
                {data.banner_details}
              </h2>
              <h2 className="font-montserrat font-bold text-5xl mt-3">
                {data.banner_description}
              </h2>
              <div className="h-10">
                {button.map((item) => (
                  <a
                    onClick={downloadCV}
                    className="text-white font-poppins font-bold bg-secondary text-xl px-7 rounded-[45px] py-5 inline-block mt-7 hover:py-6 hover:px-8 hover:mt-6 hover:ml-[-7px] hover:shadow-2xl hover:text-[22px] duration-300"
                  >
                    {item.button_text}
                  </a>
                ))}
              </div>
              <img
                className="absolute top-64 right-[400px] -z-10"
                src="../../images/bannerbg3.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
