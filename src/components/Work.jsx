import { AiFillChrome, AiFillGithub } from "react-icons/ai";
import proj1 from "../assets/estate.png";
import proj2 from "../assets/smartLibrary-home.png";
import proj3 from "../assets/focuswku.png";
import proj4 from "../assets/Portfolio.png";

const Work = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">
              These are the previews project I have worked on.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1 col-span-2 sm:col-span-1">
            <a href="/" className="group col-span-3">
              <img
                src={proj2}
                alt=""
                className="h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"
              />
            </a>
            <div className="p-4">
              <h2 className="text-gray-200">Smart Library</h2>
              <p className="text-gray-400">
              Smart Library project include home page book display, book brawse section, and add, update, and delete book operation.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer">
                <AiFillGithub className="w-[35px] h-auto" />
              </a>
              <a href="#" className="cursor-pointer">
                <AiFillChrome className="w-[35px] h-auto" />
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1 col-span-2">
            <a href="/" className="group col-span-3">
              <img
                src={proj1}
                alt=""
                className="h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"
              />
            </a>
            <div className="p-4">
              <h2 className="text-gray-200">Estate</h2>
              <p className="text-gray-400">
              
              Estate is the project with many functionality such global search, addListing, upload one or multiple picture, updateListing, user signup and login.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer">
                <AiFillGithub className="w-[35px] h-auto" />
              </a>
              <a href="#" className="cursor-pointer">
                <AiFillChrome className="w-[35px] h-auto" />
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1 col-span-2">
            <a href="/" className="group col-span-3">
              <img
                src={proj3}
                alt=""
                className="h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"
              />
            </a>
            <div className="p-4">
              <h2 className="text-gray-200">FocusWKU</h2>
              <p className="text-gray-400">
                FocusWKU is a blog post site posting weekly and daily written, Image and Video post. 
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer">
                <AiFillGithub className="w-[35px] h-auto" />
              </a>
              <a href="#" className="cursor-pointer">
                <AiFillChrome className="w-[35px] h-auto" />
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-black/40 overflow-hidden shadow-xl z-1 col-span-2 sm:col-span-1">
            <a href="/" className="group col-span-3">
              <img
                src={proj4}
                alt=""
                className="h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"
              />
            </a>
            <div className="p-4">
              <h2 className="text-gray-200">Portfolio</h2>
              <p className="text-gray-400">
                This is my previews portfolio.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer">
                <AiFillGithub className="w-[35px] h-auto" />
              </a>
              <a href="#" className="cursor-pointer">
                <AiFillChrome className="w-[35px] h-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
