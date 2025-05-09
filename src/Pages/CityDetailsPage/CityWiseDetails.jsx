import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonSlider from "../../Components/Sliders/SliderComponent/CommonSlider";
import { vendorCategory } from "../../Components/Store/DataStore";
import CommonVendorCard from "./CommonVendorCard";
import StoreIcon from "@mui/icons-material/Store";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VendorsDetailsSection from "../../Components/Navigation/Components/VendorsDetailsSection";
import { Rating } from "@mui/material";

const CityWiseDetails = () => {

  const [currentCity, setCurrentCity] = useState("Aarambhs");
  const location = useLocation();
  const city = location.pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (city) {
      setCurrentCity(city);
    }
  }, [city]);

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
  };

  const data = vendorCategory.slice(0, 8).map((data, i) => (
    <div key={i} className="w-full p-2 ">
      <CommonVendorCard data={data} city={currentCity} />
    </div>
  ));

// popular categories data

  const popularCategory = [
    {
      name: "Banquet",
      image:
        "https://i.pinimg.com/736x/0c/96/bd/0c96bd781be32d186e2a9b407b60bd22.jpg",
    },
    {
      name: "Hotel",
      image:
        "https://i.pinimg.com/736x/ea/20/8b/ea208b5d72982107ddad83ae7a1634a9.jpg",
    },
    {
      name: "Party Hall",
      image:
        "https://i.pinimg.com/736x/89/c8/3a/89c83a762fe2c59d0659fec9703e49fb.jpg",
    },
    {
      name: "Marriage Home",
      image:
        "https://i.pinimg.com/736x/69/6d/92/696d924a5c649caa726db7a496410d90.jpg",
    },
    {
      name: "Meeting Hall",
      image:
        "https://i.pinimg.com/736x/56/66/a5/5666a5c9918aa056fa3c3abb2481c76b.jpg",
    },
  ];

  const otherCategory = [
    {
      name: "Mehndi Artist",
      image:
        "https://i.pinimg.com/474x/db/cd/6a/dbcd6a632b10ada57c6b0e86b74a541e.jpg",
    },
    {
      name: "Bridal Makeup",
      image:
        "https://i.pinimg.com/474x/b7/a5/a4/b7a5a4340d172ed6f8bc51a3aabfffdd.jpg",
    },
    {
      name: "Catering Service ",
      image:
        "https://i.pinimg.com/474x/65/01/39/6501399a193855b2273e22f37264fe73.jpg",
    },
    {
      name: "Wedding Planner ",
      image:
        "https://i.pinimg.com/736x/3e/1c/58/3e1c580ca4c87e46cedc3834056188a3.jpg",
    },
    {
      name: "Wedding Decorator",
      image:
        "https://i.pinimg.com/736x/cc/2d/fb/cc2dfb7e8d0de9ffa32103bdcd9bb7cb.jpg",
    },
  ];

  const handleVendorsSearch = () => {
    setIsOpen(!isOpen);
  };


  const favouriteVendors = [
    {
      image: "https://i.pinimg.com/736x/cf/2c/bb/cf2cbb83a6438264a62d3d218e0b36e1.jpg",
      name: "Shree Marriage Garden",
      rate: "4.6",
      verifiedStatus: "Verified",
      location: "Bhagwan Takies, Agra",
      price: "₹50,000 for a day",
    },
    {
      image: "https://i.pinimg.com/736x/c6/0e/c1/c60ec13951d2043709cf97ec885fb4cb.jpg",
      name: "Aman Photo Studio",
      rate: "4.9",
      verifiedStatus: "Verified",
      location: "Rambagh, Agra",
      price: "₹15,000 for 50 sheets",
    },
    {
      image: "https://i.pinimg.com/736x/fc/23/8e/fc238ef9914cdbe1df6090d8b1e1fafd.jpg",
      name: "Mehndi by Ritu",
      rate: "4.8",
      verifiedStatus: "Verified",
      location: "Rambagh, Agra",
      price: "Starting price '₹3,000' ",
    },
    {
      image: "https://i.pinimg.com/736x/4a/9f/64/4a9f640484900f73a0b4080910d08d4a.jpg",
      name: "Wedding Planner",
      rate: "4.5",
      verifiedStatus: "Verified",
      location: "Baluganj, Agra",
      price: "₹6,000 / night",
    },
    {
      image: "https://i.pinimg.com/736x/98/f8/bd/98f8bd55843e555f2ba1618f4fa8d608.jpg",
      name: "Krishna Photography",
      rate: "4.7",
      verifiedStatus: "Verified",
      location: "Near Bhagwan Takies, Agra",
      price: "Start from '₹17,000' ",
    },

    {
      image: "https://i.pinimg.com/736x/ea/20/8b/ea208b5d72982107ddad83ae7a1634a9.jpg",
      name: "Taj Lawn Banquet",
      rate: "4.6",
      verifiedStatus: "Verified",
      location: "MG Road,Agra",
      price: "₹60,000 for a day",
    },
    {
      image: "https://i.pinimg.com/736x/72/50/0a/72500a8d15413fd1542aefef7f1d47f2.jpg",
      name: "Henna Art by Neha",
      rate: "4.3",
      verifiedStatus: "Verified",
      location: "Rambagh, Agra",
      price: "Start from '₹2,800' ",
    },
    {
      image: "https://i.pinimg.com/736x/24/cf/fd/24cffd183f696c32aeda645b7d10fb2a.jpg",
      name: "Sunshine Residency Hotel",
      rate: "4.2",
      verifiedStatus: "Verified",
      location: "Sikandara, Agra",
      price: "₹4,800 / night",
    },
    {
      image: "https://i.pinimg.com/736x/26/8f/a8/268fa84b66b9c7971522320e9f28d8a0.jpg",
      name: "Priyanka Decorator",
      rate: "4.5",
      verifiedStatus: "Verified",
      location: "New Agra, Agra",
      price: "Start from '₹15,000'",
    },
  ];


  return (
    <div className=" flex flex-col  w-full min-h-50  items-center  bg-white ">
      <div className=" relative flex items-center justify-center w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96   ">
        <div className=" flex items-center justify-center w-full h-full ">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/17/55/atoll-1854069_1280.jpg"
            alt="detaiImage"
            className="w-full h-full object-cover object-center "
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent text-white  max-md:gap-3 gap-5 overflow-visible pb-5 "></div>

        <div className="flex flex-col items-center  justify-end absolute max-md:-bottom-5 bottom-10 left-0 w-full h-full  max-md:gap-3 gap-5 overflow-y-visible ">
          <h1 className="text-2xl text-white lg:text-3xl  xl:text-4xl font-semibold ">
            Plan your wedding in <span>{currentCity}</span>
          </h1>

          <div
            className="flex items-center justify-start max-md:w-[80vw] max-lg:w-[60vw] w-[45vw] h-8 bg-white rounded-md  max-md:shadow-md cursor-pointer  relative "
            onClick={handleVendorsSearch}
          >
            <div className="flex items-center justify-center bg-[#FA812F] h-full w-10   rounded-tl-md rounded-bl-md ">
              <StoreIcon
                sx={{
                  color: "white",
                  fontSize: {
                    xs: 20,
                    sm: 20,
                    md: 24,
                    lg: 28,
                    xl: 32,
                  },
                }}
              />
            </div>
            <div className=" flex items-center justify-between px-3  h-full w-[90%] ">
              <p className=" text-[#FA812F] font-semibold  max-md:text-sm text-base">
                Find Vendors{" "}
              </p>
              <KeyboardDoubleArrowRightIcon sx={{ color: "#FA812F" }} />
            </div>

            {isOpen && (
              <div className="flex w-full rounded-bl-md rounded-br-md bg-white min-h-30 h-fit absolute top-13 z-50 left-0 shadow-md ">
                <VendorsDetailsSection />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full h-fit flex-col items-start max-w-[1280px] max-md:pt-10 pt-5">
        <h1 className=" w-full text-left px-3  max-md:text-base max-lg:text-lg text-2xl font-semibold text-gray-800">
          View By Category
        </h1>
        <div className="flex flex-col w-full max-w-7xl mx-auto max-md:px-1 px-4 py-4 ">
          <CommonSlider
            data={data}
            responsive={responsive}
            getItemsPerPage={null}
          />
        </div>
      </div>


      {/* popular hotel in this city  */}

      <div className="flex flex-col w-full h-fit items-start justify-center max-w-[1280px] gap-5   ">
        <h1 className=" w-full text-left px-3 text-gray-800 max-md:text-base max-lg:text-lg text-2xl font-semibold ">
          Popular Categories
        </h1>
        <div className=" grid max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-5 w-full px-3 gap-2">
          {popularCategory.map((d, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-between max-md:h-45 max-lg:h-50 h-70 rounded-md  border border-gray-300  w-full relative cursor-pointer  hover:shadow-md "
            >
              <div className="flex items-center justify-center w-full h-full rounded-md">
                <img
                  src={d.image}
                  alt="hotel-image"
                  className="w-full h-full object-cover object-top rounded-md  "
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center rounded-md">
                <div className=" flex items-start justify-center w-full h-15 px-2">
                  <h1 className=" text-white font-semibold  max-md:text-base  max-lg:text-lg text-xl w-full ">
                    {d.name} in {currentCity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  some famous vendors in this city */}

      <div className="flex w-full h-fit flex-col items-start max-w-[1280px]  pt-5">
        <h1 className=" w-full text-left px-3  max-md:text-base max-lg:text-lg text-2xl font-semibold text-gray-800">
          Most Famous vendors in {currentCity}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-7xl mx-auto max-md:px-3 px-4 py-4 gap-2 overflow-x-scroll">
          {
            favouriteVendors.map((data, idx) =>
              <div key={idx} className="flex flex-col w-full h-60 lg:h-64  border border-gray-300 rounded-md hover:shadow-lg " >

                <div className="flex items-center justify-center w-full h-1/2 lg:h-3/5 " >
                  <img src={data.image} alt="vendor image" className=" w-full h-full  object-cover object-top rounded-md  " />
                </div>
                <div className=" flex flex-col w-full h-1/2 lg:h-2/5  items-start justify-between p-1 py-2 text-left" >
                  <div className=" flex w-full items-center justify-between " >
                    <h1 className="text-sm font-medium text-gray-800 md:text-base " >{data.name}</h1>
                    <div className=" flex items-center justify-center h-6 w-6 " > <img src={data.verifiedStatus === "Verified" ? "/verified.png" : "/envrified.png"} alt="verified status" className=" h-full w-auto object-cover object-center " />  </div>
                  </div>
                  <div className=" flex items-center justify-start w-full  ">
                    <Rating
                      name="sread-only"
                      value={data.rate}
                      sx={{
                        fontSize: "14px",
                      }}
                    />
                  </div>
                  <p className="text-xs  "  >{data.location}</p>
                  <div className=" flex w-full items-center justify-between " >
                    <p className=" text-xs " >{data.price}</p>
                    <button type="button" className="bg-gray-100 font-medium cursor-pointer text-gray-700 text-xs px-2 lg:px-4 lg:py-1 rounded " > More</button>
                  </div>

                </div>

              </div>
            )
          }
        </div>
      </div>


      {/*  other categories */}
      <div className="flex flex-col w-full h-fit items-start justify-center max-w-[1280px] py-5 gap-5">
        <h1 className=" w-full text-left px-3  max-md:text-base max-lg:text-lg text-2xl font-semibold text-gray-800">
          Other Categories
        </h1>
        <div className=" grid max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-5 w-full px-3 gap-2">
          {otherCategory.map((d, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center justify-between max-md:h-45 max-lg:h-50 h-70 rounded-md  border border-gray-300  w-full relative cursor-pointer  hover:shadow-md group "
            >
              <div className="flex items-center justify-center w-full h-full rounded-md">
                <img
                  src={d.image}
                  alt="hotel-image"
                  className="w-full h-full object-cover object-top rounded-md  "
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center rounded-md">
                <div className=" flex items-start justify-center w-full h-15 px-2 ">
                  <h1 className=" text-white font-semibold  max-md:text-base  max-lg:text-lg text-xl w-full ">
                    {d.name} in {currentCity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default CityWiseDetails;
