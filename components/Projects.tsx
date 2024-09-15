import Image from "next/image";
import Link from "next/link";
import React from "react";
import hekto from "@/public/2.png"
import wp from "@/public/wp.png"
import fin from "@/public/fin.png"
import im from "@/public/im.png"
import p from "@/public/p.png"

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex justify-between md:flex-row  mt-7">
         <div className="w-[48%]">
         <Link href="https://ecommerce-project-psi-two.vercel.app" rel="noopener noreferrer" target="_blank" className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src={hekto} height={150} width={150} className="rounded-[10px]" alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Hekto</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI Ecommerce website comprising more than 50 screens,
                  along with the integration of a blog using React.js.
                </p>
              </div>
            </div>
          </Link>
         </div>


          <div className="w-[48%]">
          <Link href="https://wppool-dev.vercel.app" rel="noopener noreferrer" target="_blank" className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src={wp} height={150} width={150} className="rounded-[10px]" alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Wppool.dev</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website along with using React.js.
                </p>
              </div>
            </div>
          </Link>
          </div>
        </div>

        <div className="flex justify-between md:flex-row  mt-7">
         <div className="w-[48%]">
         <Link href="https://react-finsweet.vercel.app/" rel="noopener noreferrer" target="_blank" className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src={fin} height={150} width={150} className="rounded-[10px]" alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Finsweet</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website along with using React.js.
                </p>
              </div>
            </div>
          </Link>
         </div>

          <div className="w-[48%]">
          <Link href="https://practice1-five-alpha.vercel.app/" rel="noopener noreferrer" target="_blank" className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src={im} height={150} width={150} className="rounded-[10px]" alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Imagination</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website along with using React.js.
                </p>
              </div>
            </div>
          </Link>
          </div>
         </div>

         <div className="mt-7">
         <Link href="https://portfolioo-gilt.vercel.app/" rel="noopener noreferrer" target="_blank" className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image src={p} height={150} width={150} className="rounded-[10px]" alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Portfolio</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website along with using React.js.
                </p>
              </div>
            </div>
          </Link>
         </div>
      </div>
    </section>
  );
};

export default Projects;
