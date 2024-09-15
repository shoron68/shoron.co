import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Hello !
          <br/>
          <br/>
          A Frontend Developer specializing in React.js focuses on building the parts of websites or web applications that users interact with. They use React to create dynamic, responsive, and efficient user interfaces. Their job involves converting designs into code, ensuring websites look good on different devices, and improving the user experience.
          <br/>
          <br/>
           React.js allows them to build reusable components, making the development process faster and more scalable. They also collaborate with backend developers to integrate data and functionality into the frontend, creating seamless, interactive web experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
