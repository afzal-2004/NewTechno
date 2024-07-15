import "./Home.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";
import { SiNetflix } from "react-icons/si";
import Hero from "/1.png";
import Web from "/2.webp";

const Home = () => {
  const BrandLogo = [
    {
      logo: <FaGoogle />,
      text: "Google",
      animationeffect: "Googleanimate",
    },
    {
      logo: <FaFacebookF />,
      text: "Facebook",
      animationeffect: "Facebookanimate",
    },
    {
      logo: <GrAmazon />,
      text: "Amazon",
      animationeffect: "Amazonanimate",
    },
    {
      logo: <SiNetflix />,
      text: "Netflix",
      animationeffect: "Netflixanimate",
    },
  ];
  return (
    <>
      <section>
        <div className="Hero  w-full  m-0  relative ">
          <img src={Hero} alt="" className="  md:HeroImage  mobileImage" />
          <h1
            className="  text-white    absolute  
               sm:top-[40%]  top-[30%]  right-[40px]
           md:text-[40px]   text-[35px]
           md:right-5   font-bold  text-center p-4"
          >
            {" "}
            NewTech
            <p className=" font-medium  sm:text-[35px] text-[20px]">
              Something is new for you
            </p>
          </h1>
        </div>

        <div className=" text-white text-[20px]  lg:flex justify-between  items-center min-h-[60vh] p-5 ">
          <img src={Web} alt="" className="Animate  text-center  sm:w-full" />
          <p className="  md:text-[20px] md:about-text  opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            distinctio molestias sunt consequatur, asperiores debitis cumque
            quae autem voluptate ipsam qui fugit labore, aut consequuntur amet
            natus error velit porro! Excepturi neque facilis asperiores mollitia
            officia illo? Quis corrupti, consequatur amet id ratione neque
            accusamus, nulla sed ea quasi animi ut eveniet, repellat voluptates
            modi excepturi odit nam?
          </p>
        </div>

        <div className="About" id="about">
          <div
            className="   sm:rounded-tr-[150px]  
             sm:rounded-br-[150px] bg-white  
            md:mt-[10vh] min-h-[70vh] flex flex-col justify-center   p-[30px] sm:max-w-[70%]    "
          >
            <h1 className=" text-[40px] text-center uppercase"> About </h1>
            <p className=" text-[20px] about-text  opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              deleniti corrupti, natus sit mollitia reprehenderit nam aut quae
              repudiandae qui amet sapiente ea ipsa quos veniam pariatur id cum
              voluptatem? Accusantium dolores modi eveniet placeat natus officia
              deleniti necessitatibus! Culpa, accusamus, quasi fuga illum cum
              alias voluptatibus facere soluta aliquam nam animi inventore
              libero dignissimos, deleniti modi ut voluptatum numquam.
            </p>
          </div>
        </div>

        <div className=" Brand " id="brand">
          <div
            className=" md:max-w-[70%]  
          min-h-[70vh] flex  flex-col items-center
             brandcard justify-center  p-[30px] 
             md:mt-[10vh]  sm:rounded-tl-[150px]  
             sm:rounded-bl-[150px]
 "
          >
            <h1 className=" md:text-[40px] text-center uppercase text-[30px]">
              {" "}
              Our Collabrator
            </h1>
            <ul className="flex flex-wrap sm:gap-[25px] w-full justify-between md:mt-[20px]">
              {BrandLogo.map((Brands, i) => (
                <li
                  key={i}
                  className={` BrandLogo  
                   ${Brands.animationeffect}`}
                >
                  {Brands.logo}
                  <p>{Brands.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
