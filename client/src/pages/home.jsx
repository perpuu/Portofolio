import { Link } from "react-router-dom";

export default function home() {
  return (
    <section className="bg-white-800 text-white mt-10">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="hero-info" style={{ fontFamily: "Fantasy,cursive" }}>
          <h1
            className="lg:text-6xl"
            
          >
            Hi, <br />I am Putra <br />
            Webdeveloper
          </h1>
          <p className="py-7">
            I am profiecient in Back-end Web Development and Front-end
          </p>

          <Link
            to="/portofolio"
            type="Button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            My Portofolio
          </Link>
          <Link
            to="/about-me"
            type="Button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            About-Me
          </Link>
        </div>
        <div className="hero-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CBF935HNOr3aaYP1y2LFTgCc_to7sQOesQsr1GWlDPUWhclbsLLV5VzuXIBeSFimLAg&usqp=CAU"
            alt="coding"
            className="w-[80%] ml-auto mt-5"
          ></img>
        </div>
      </div>
    </section>
  );
}
