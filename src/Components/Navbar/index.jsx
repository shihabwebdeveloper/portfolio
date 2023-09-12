import React, { useEffect, useState } from "react";
import axios from "axios";

// http://localhost:1337/api/menus?populate=*

const Navbar = () => {
  let [logo, setLogo] = useState("");
  let [menu, setMenu] = useState([]);
  let [button, setButton] = useState([]);

  useEffect(() => {
    async function menu() {
      const data = await axios.get(
        "http://localhost:1337/api/menus?populate=*"
      );
      setLogo(data.data.data[0].attributes.Logo.data.attributes.url);
      setMenu(data.data.data[0].attributes.menu_item);
      setButton(data.data.data[0].attributes.button);
    }
    menu();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center shadow-lg bg-white absolute top-0 left-0 z-50">
        <div className="container h-[100px] flex justify-between p-3.5">
          <img src={`http://localhost:1337${logo}`} />
          <div className="flex align-middle h-full">
            <ul className="flex">
              {menu.map((item) => (
                <li className="font-poppins text-lg font-semibold text-primary ml-8 mt-6 inline-block hover:text-secondary duration-150">
                  {item.item}
                </li>
              ))}
            </ul>
            {button.map((item) => (
              <a
                href={item.button_link}
                className="font-poppins text-xl font-bold text-white bg-primary px-5 py-5 inline-block rounded-md ml-16"
              >
                {item.button_text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
