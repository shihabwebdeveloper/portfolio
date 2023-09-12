import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  let [data, setData] = useState("");
  let [photo, setPhoto] = useState("");
  let [button, setButton] = useState([]);
  let [mySkills, setMySkills] = useState([]);

  useEffect(() => {
    async function menu() {
      const data = await axios.get(
        "http://localhost:1337/api/abouts?populate=*"
      );
      setButton(data.data.data[0].attributes.button);
      setPhoto(data.data.data[0].attributes.About_media.data.attributes.url);
      setData(data.data.data[0].attributes);
      setMySkills(data.data.data[0].attributes.my_skills);
    }
    menu();
  }, []);

  const downloadCV = () => {
    const cvUrl = '../../images/Resume-Shihab.pdf'; // Update the path to your CV file

    // Create a link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Shihab-Resume.pdf'; // Specify the desired download filename

    // Trigger a click event on the link to initiate the download
    link.click();
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="container flex h-screen">
            <div className="w-6/12 flex justify-center  h-screen">
              <div>
                <h1 className="font-poppins font-black text-[160px] tracking-wider text-stroke text-transparent">
                  ABOUT
                </h1>
                <h2 className="font-montserrat font-extrabold text-5xl mt-[-140px] ">
                  {data.Title}
                </h2>
                <h3 className="font-poppins font-medium text-lg mt-11 after:content-[''] after:w-[660px] after:h-px after:absolute relative after:bottom-[-35px] after:left-0 after:bg-black after:opacity-30 duration-300 ">
                  {data.sub_title}
                </h3>
                <p className="font-poppins font-normal text-lg leading-7 mt-[80px] ">
                  {data.Description}
                  <p className="mt-6">{data.sub_description}</p>
                </p>
                <div className="mt-10">
                  <h1 className="font-montserrat font-bold text-3xl tracking-wide mb-4 after:content-[''] after:w-96 after:h-px after:absolute relative after:-bottom-3 after:left-0 after:opacity-30 after:bg-black">
                    My Development Skills:
                  </h1>
                  <div className="flex flex-wrap">
                    {mySkills.map((item) => (
                      <p className="font-montserrat font-bold text-lg mr-4 mt-2">
                        <span className="bg-secondary opacity-75 w-[10px] h-[10px] mt-[-20px] rounded-full inline-block mr-1.5"></span>
                        {item.skills}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-14">
                  {button.map((item) => (
                    <a
                      onClick={downloadCV}
                      className="font-poppins font-bold text-2xl text-white bg-secondary py-5 rounded-[45px] px-9 hover:py-6 hover:px-10 hover:mt-4 hover:ml-[-7px] hover:shadow-2xl hover:text-[26px] duration-300"
                    >
                      {item.button_text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-6/12 flex justify-end ml-2.5 items-center h-full">
              <img src={`http://localhost:1337${photo}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
