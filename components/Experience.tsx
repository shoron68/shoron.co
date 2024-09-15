import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">

        <p className="text-gray-300 pt-5">
        Over the past year, I have gained hands-on experience in developing web applications using React.js, Tailwind CSS, JavaScript, and Bootstrap. I have built responsive, user-friendly interfaces and developed reusable components to streamline the development process. By leveraging Tailwind CSS and Bootstrap, I created modern, visually appealing designs with efficient layouts.
        <br/>
        <br/>
         Throughout my projects, I worked on improving performance, debugging issues, and ensuring compatibility across different devices and browsers. This experience has strengthened my skills in creating dynamic, scalable web applications and collaborating with teams to deliver high-quality products.
        </p>
        <div className="flex-col flex sm:flex-row ">
          
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Tailwind Css
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Bootstrap
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
