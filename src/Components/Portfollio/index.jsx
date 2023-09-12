import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  let [data, setData] = useState("");
  let [skills, setSkills] = useState([]);
  let [skills2, setSkills2] = useState([]);
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    async function menu() {
      const data = await axios.get(
        "http://localhost:1337/api/portfolios?populate=*"
      );
      setSkills(data.data.data[0].attributes.Skills_logo.data);
      setSkills2(data.data.data[0].attributes.Skills_logo2.data);
      setData(data.data.data[0].attributes);
      setProjects(data.data.data[0].attributes.Projects);
    }
    menu();
  }, []);

  return (
    <>
      <div className="h-max flex justify-center bg-background relative pb-5">
        <img
          className="absolute bottom-0 left-0 w-full"
          src="../../images/vector.png"
        />
        <div className="container">
          <h1 className="font-poppins font-black text-[160px] tracking-wider text-stroke text-transparent">
            PORTFOLIO
          </h1>
          <h2 className="font-montserrat font-extrabold text-5xl mt-[-140px]">
            {data.Title}
          </h2>
          <div className="flex w-full justify-between mt-24 flex-wrap">
            {projects.map((item) => (
              <div className="mb-9 rounded-xl duration-300">
                <img
                  className="w-[450px] h-96 rounded-2xl shadow-xl object-cover"
                  src="../../images/project.png"
                  alt=""
                />
                <h2 className="font-montserrat font-semibold text-2xl leading-6 tracking-wide mt-6">
                  {item.project_title}
                </h2>
                <p className="font-montserrat font-normal text-base after:duration-500 leading-7 tracking-wide mt-1 after:w-0 hover:after:w-[100px] after:h-px after:absolute relative after:bottom-0 after:left-0 after:bg-black after:opacity-40 mb-3 inline-block">
                  {item.project_sub_title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center mt-5">
        <div className="container flex justify-between flex-wrap">
          {skills.map((item) => (
            <img
              className="px-16"
              src={`http://localhost:1337${item.attributes.url}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-white flex justify-center mt-10 shadow-md pb-6">
        <div className="container flex justify-between flex-wrap px-28">
          {skills2.map((item) => (
            <img
              className="px-16"
              src={`http://localhost:1337${item.attributes.url}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
