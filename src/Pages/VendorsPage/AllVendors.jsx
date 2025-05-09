import React, { useState } from "react";
import ReviewComponent from "../../Components/Rating&Review/ReviewComponent";
import RatingComponent from "../../Components/Rating&Review/RatingComponent";
import AccordionTransition from "./Components/FAQs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArtistDetailCard from "./Components/ArtistDetailCard";

const AllVendors = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Photos");
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveTab = (tab) => {
    if (tab == "Photos") {
      setActiveTab("Photos");
    } else {
      setActiveTab("Videos");
    }
  };

  const iconsData = [
    {
      icon: "/fbicon.png",
    },
    {
      icon: "/whaicon.png",
    },
    {
      icon: "/instagramLogo.png",
    },
    {
      icon: "/xicon.png",
    },
  ];

  const handleAvailability = async () => {
    const formData = new FormData();

    formData.append("date", selectedDate);

    // await axios.post(`/${url}/api/checkavailability`, formData )

    if (isBooked) {
      setOpen(!open);
    }
  };

  const allPhotos = null || [
    "https://i.pinimg.com/736x/47/64/5b/47645b62d984e66ad9f781f73a550c30.jpg",
    "https://i.pinimg.com/736x/c7/de/72/c7de72c0fb14a2eb876114afbf1ee8f7.jpg",
    "https://i.pinimg.com/736x/a0/9c/a0/a09ca05b42473138d9166f74cb23170c.jpg",
    "https://i.pinimg.com/736x/98/72/a7/9872a78ce723285d76777ed72ae31dd7.jpg",
    "https://i.pinimg.com/736x/38/33/63/383363a8b0ab9e41ff3e5ccfc6831be3.jpg",
    "https://i.pinimg.com/736x/6f/f4/6c/6ff46c3c7597848a8711d989660ce172.jpg",
    "https://i.pinimg.com/736x/39/e3/7b/39e37b2d76f1b548cd10373171bc2447.jpg",
    "https://i.pinimg.com/736x/d7/23/80/d723805354053044819058463f1c60a0.jpg",
    "https://i.pinimg.com/736x/4a/0f/f6/4a0ff6fcf26fb04971d49a392aa3b1c3.jpg",
    "https://i.pinimg.com/736x/d9/55/c3/d955c3eb4744190d4c5a8da373b28a22.jpg",
    "https://i.pinimg.com/736x/df/4d/e0/df4de01e625e83a26444054680fdd696.jpg",
    "https://i.pinimg.com/736x/38/33/63/383363a8b0ab9e41ff3e5ccfc6831be3.jpg",
    "https://i.pinimg.com/736x/6f/f4/6c/6ff46c3c7597848a8711d989660ce172.jpg",
    "https://i.pinimg.com/736x/39/e3/7b/39e37b2d76f1b548cd10373171bc2447.jpg",
    "https://i.pinimg.com/736x/e8/19/98/e81998f29963c01c20dbff17bd6f2b02.jpg",
    "https://i.pinimg.com/736x/57/58/4e/57584ec187b82b6a4ce93d504ea9bf85.jpg",
    "https://i.pinimg.com/736x/a0/9c/a0/a09ca05b42473138d9166f74cb23170c.jpg",
    "https://i.pinimg.com/736x/98/72/a7/9872a78ce723285d76777ed72ae31dd7.jpg",
    "https://i.pinimg.com/736x/4a/0f/f6/4a0ff6fcf26fb04971d49a392aa3b1c3.jpg",
    "https://i.pinimg.com/736x/d9/55/c3/d955c3eb4744190d4c5a8da373b28a22.jpg",
    "https://i.pinimg.com/736x/df/4d/e0/df4de01e625e83a26444054680fdd696.jpg",
    "https://i.pinimg.com/736x/38/33/63/383363a8b0ab9e41ff3e5ccfc6831be3.jpg",
    "https://i.pinimg.com/736x/6f/f4/6c/6ff46c3c7597848a8711d989660ce172.jpg",
    "https://i.pinimg.com/736x/39/e3/7b/39e37b2d76f1b548cd10373171bc2447.jpg",
    "https://i.pinimg.com/736x/e8/19/98/e81998f29963c01c20dbff17bd6f2b02.jpg",
  ];

  const allVideos = [
    "https://videos.pexels.com/video-files/2078587/2078587-sd_640_360_24fps.mp4",
    "https://videos.pexels.com/video-files/3122106/3122106-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3150674/3150674-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3936463/3936463-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3122160/3122160-sd_640_360_25fps.mp4",
  ];

  const otherPhotographer = [
    {
      image:
        "https://i.pinimg.com/736x/48/dd/df/48dddf382438ce6d73df9b20ab1ccb14.jpg",
      name: "Vinay Photography",
      rating: "4.8",
      status: "Verified",
    },
    {
      image:
        "https://i.pinimg.com/736x/c2/91/7b/c2917b4fefb226b82e01d94e9b817aaf.jpg",
      name: "Sanjana Studio",
      rating: "4.9",
      status: "Non-Verified",
    },
    {
      image:
        "https://i.pinimg.com/736x/8c/81/bd/8c81bdef6dad4f2e9fccd05b6bcdb8fb.jpg",
      name: "Krishna Photo Lab",
      rating: "4.7",
      status: "Verified",
    },
    {
      image:
        "https://i.pinimg.com/736x/6c/0c/ad/6c0cadb659e56f800ec3926a8069c58d.jpg",
      name: "Anjali Photo Studio",
      rating: "4.6",
      status: "Non-Verified",
    },
    {
      image:
        "https://i.pinimg.com/736x/24/42/a0/2442a0ef6603cc778993373562bd3a4c.jpg",
      name: "Prince Photo Lab",
      rating: "5.0",
      status: "Verified",
    },
    {
      image:
        "https://i.pinimg.com/736x/12/9e/ee/129eeec2da4c4f9f1c814ed97b861374.jpg",
      name: "Kumar Photo Studio",
      rating: "4.5",
      status: "Verified",
    },
  ];

  // terms & conditions

  const termConditions = [
    {
      head: "Booking",
      text: "A 30% advance is required to confirm the booking.",
    },
    {
      head: "Cancellation",
      text: "Advance is non-refundable if cancelled by the client.",
    },
    {
      head: "Delivery",
      text: "Photos/videos will be delivered within 15–30 days.",
    },
    {
      head: "Usage",
      text: "We may use images for our portfolio unless the client opts out.",
    },
    {
      head: "Liability",
      text: "We are not responsible for issues beyond our control (e.g., weather, equipment failure).",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-start max-w-[1280px] w-full min-h-[100vh] h-fit   px-2 gap-2 lg:gap-5 py-2 relative ">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] w-full gap-5  ">
        <div className="flex items-center justify-between w-full h-15 ">
          <h1 className=" text-base lg:text-lg xl:text-2xl 2xl:text-4xl font-semibold ">
            Best Wedding Photographers{" "}
          </h1>
          <div className=" flex items-center justify-center h-10 w-10 p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 ">
            <img
              src="/icons/share.png"
              alt="share icon"
              className=" h-full w-full object-cover object-center  "
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] w-full gap-10">
        <div className=" flex flex-col items-center justify-start gap-4 md:gap-2 w-full  ">
          <div className="flex items-start justify-center w-full border h-48 xs:h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg bg-black ">
            <div className=" flex flex-col items-center justify-center w-1/2 p-4 gap-2 md:gap-5 h-full text-white ">
              <h1 className=" text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">
                Start Photography With
              </h1>
              <h1 className=" text-lg  md:text-2xl lg:text-3xl xl:text-4xl ">
                {" "}
                Aman Photo Studio
              </h1>
            </div>
            <div className=" flex w-1/2 h-full ">
              <img
                src="/otherImages/photographerImage.png"
                alt="photographerImage"
              />
            </div>
          </div>
          <div className=" flex flex-col  md:flex-row items-start md:items-center justify-between w-full  h-fit gap-4">
            <div className="flex items-center justify-start gap-2 md:gap-4 ">
              <div className=" flex items-center justify-center px-2 py-1 bg-orange-400 text-white rounded-md font-medium text-sm text-nowrap">
                Pre-Wedding{" "}
              </div>
              <div className=" flex items-center justify-center px-2 py-1 bg-orange-400 text-white rounded-md font-medium text-sm text-nowrap">
                Wedding{" "}
              </div>
              <div className=" flex items-center justify-center px-2 py-1 bg-orange-400 text-white rounded-md font-medium text-sm text-nowrap">
                Candid{" "}
              </div>
            </div>

            <div className="flex w-full gap-4 items-center justify-between md:justify-end max-md:px-1 rounded max-md:bg-gray-100 max-md:py-3 ">
              <p className=" text-gray-700 font-medium ">
                {" "}
                <ThumbUpIcon
                  sx={{ color: "rgb(23,141,0)", fontSize: "18px" }}
                />{" "}
                12.2 k are interested{" "}
              </p>
              <button
                type="button"
                className="border border-orange-400 px-4 py-1 rounded text-base md:text-lg text-orange-400 font-medium "
              >
                I'm Interested{" "}
              </button>
            </div>
          </div>

          <div className=" flex lg:hidden items-start justify-between w-full h-fit gap-4 border border-gray-200 p-4 rounded ">
            <ArtistDetailCard />
          </div>
          <div className=" flex flex-col  items-start justify-start w-full h-fit gap-2 px-4 py-2 rounded border border-gray-200  ">
            <h1 className="text-lg font-semibold">About Us</h1>
            <p className="text-gray-700 line-clamp-3 text-justify ">
              We are providing photography services since 2021 in Agra and
              Delhi. Our team of passionate photographers specializes in
              weddings, pre-weddings, and candid moments, ensuring your memories
              are captured with creativity and care. We believe every photo
              tells a story, and our goal is to make yours unforgettable. From
              traditional ceremonies to modern shoots, we bring a perfect blend
              of artistry and technology to every project. Book with us to turn
              your special moments into timeless memories.
            </p>
            <p className=" text-base bg-gray-200 px-2 py-1 rounded cursor-pointer hover:text-blue-500 ">
              Read More
            </p>
          </div>

          <div
            className=" flex  items-center justify-between w-full h-fit gap-4 bg-orange-100 cursor-pointer p-4 rounded "
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-base md:text-lg  font-medium   ">
              Terms & Conditions{" "}
            </p>
            <KeyboardDoubleArrowRightIcon />
          </div>

          <div className="flex flex-col items-start justify-between w-full h-fit gap-4 border border-gray-200 p-4 rounded">
            <h1 className="text-lg font-semibold">
              People are also interested
            </h1>

            <div className="flex items-start w-full gap-4 overflow-x-auto scrollbar-hide p-2">
              {otherPhotographer.map((data, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-start w-32 h-40 min-w-28  border border-gray-200 rounded hover:shadow-md shadow-orange-500 bg-white relative  cursor-pointer group overflow-hidden  "
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full  object-cover rounded transition-transform duration-200 ease-in-out group-hover:scale-105  "
                  />
                  <div className="absolute bottom-0 h-full w-full left-0 bg-gradient-to-t from-black/60 to-transparent z-50 flex items-end justify-end p-2 rounded">
                    <p className="text-sm text-white font-medium text-center ">
                      {data.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* gallery........... */}

          <div className=" flex flex-col items-start justify-start w-full gap-3 h-fit rounded-md  bg-[rgb(255,255,255)] lg:border border-gray-300 ">
            <div className=" flex items-center justify-start h-fit w-full max-md:gap-2 px-3  py-1  pb-3 gap-5 border-b border-gray-300">
              <div
                className={`flex items-center justify-center text-nowrap  max-md:text-base max-lg:text-lg text-xl rounded-lg text-orange-400 py-2 px-5 font-semibold  ${
                  activeTab == "Photos"
                    ? " border-b-2 border-orange-400   "
                    : "border-0 "
                }  max-md:w-1/2 w-auto cursor-pointer`}
                onClick={() => handleActiveTab("Photos")}
              >
                Latest Photos
              </div>
              <div
                className={`flex items-center justify-center text-nowrap  max-md:text-base max-lg:text-lg text-xl font-semibold text-orange-400  max-md:w-1/2 w-auto focus:bg-orange-400 py-2 px-5 rounded-lg cursor-pointer ${
                  activeTab == "Videos"
                    ? "border-b-2 border-orange-400  "
                    : "border-0 "
                } `}
                onClick={() => handleActiveTab("Videos")}
              >
                Latest Videos
              </div>
            </div>
            <div className=" flex  item-start justify-start w-full  h-fit max-md:gap-2 gap-5 px-3 ">
              {activeTab == "Photos" ? (
                allPhotos == null ? (
                  <p className="w-full text-left mt-5"> Loading..... </p>
                ) : (
                  <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-8 w-full ">
                    {allPhotos.map((data, index) => (
                      <img
                        key={index}
                        src={data}
                        alt={`img-${index}`}
                        className="w-full rounded-lg mb-4 break-inside-avoid"
                      />
                    ))}
                  </div>
                )
              ) : (
                <div className=" grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 w-full gap-3">
                  {allVideos.map((data, idx) => (
                    <div
                      key={idx}
                      className=" flex items-center justify-center w-full h-fit rounded-md border border-slate-500"
                    >
                      <video
                        src={data}
                        autoPlay
                        muted
                        className=" h-full w-full rounded-md "
                      ></video>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div></div>
          </div>

          {/* reviwes and ratings .......................... */}

          <div className="flex flex-col w-full h-100  rounded-md ">
            <RatingComponent />
          </div>
          <div className="flex flex-col w-full  h-100   rounded-md ">
            <ReviewComponent />
          </div>

          {/* frequently ask questions ................... */}
          <div className=" flex flex-col  w-full  items-start justify-center rounded-md shadow  gap-2 ">
            <div className=" flex items-center  justify-start w-full px-4 py-3 font-semibold max-md:text-lg max-lg:text-lg text-xl text-gray-800 border-b-2 border-gray-300 bg-white rounded">
              Frequently Ask Questions
            </div>

            <div className="flex w-full  items-start justify-start">
              <AccordionTransition />
            </div>
          </div>
        </div>

        {/*  left card ........................... */}
        <div className="hidden lg:flex flex-col items-center justify-start w-full ">
          <div className="flex flex-col items-start justify-start w-full rounded-lg  border border-gray-300 h-fit sticky top-20 p-3 gap-4  ">
            <ArtistDetailCard />

            <div className=" flex items-center justify-between w-full ">
              <div>
                <p className=" font-semibold text-base md:text-lg">
                  Starting Price <span> 12,000 </span>{" "}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className=" flex items-center justify-center px-4 py-2 rounded-md bg-orange-400 text-white font-medium text-sm md:text-base lg:text-base "
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-md:flex hidden items-center justify-between p-4  w-full h-16 border-t border-orange-200 bg-gray-100 fixed bottom-0 left-0 z-50 ">
        <div className=" flex flex-col items-start ">
          <p className=" font-semibold text-base md:text-lg">
            Starting Price{" "}
            <span className=" text-orange-400 ml-2 font-semibold">
              ₹ 12,000{" "}
            </span>{" "}
          </p>
        </div>
        <div>
          <button
            type="button"
            className=" flex items-center justify-center px-4 py-2 rounded-md bg-orange-400 text-white font-medium text-sm md:text-base  "
          >
            BOOK NOW
          </button>
        </div>
      </div>

      <div
        className={` flex flex-col items-center justify-start
              fixed z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out border-t-4 border-orange-400 lg:border lg:border-gray-300 px-4
               w-full min-h-60 sm:w-96 sm:h-full  rounded-tl-4xl max-lg:rounded-tr-4xl
                 ${
                   isOpen
                     ? "bottom-0 sm:bottom-auto sm:right-0"
                     : "-bottom-full sm:bottom-auto sm:-right-full"
                 } `}
      >
        <div className=" flex flex-col items-center justify-start relative "  >
        <div className=" flex items-center justify-center lg:justify-start w-full absolute top-0 lg:top-2 left-0  ">
          <div
            className=" flex items-center justify-center h-fit w-fit lg:rotate-270  "
            onClick={() => setIsOpen(!isOpen)}
          >
            <KeyboardDoubleArrowDownIcon
              sx={{ color: "orange", fontWeight: "700", fontSize: "40px" }}
            />
          </div>
        </div>
        <h1 className=" w-full lg:my-4  text-lg font-semibold mt-12">
          Terms & Conditions
        </h1>
        <div className=" flex flex-col items-start justify-start text-left gap-2 mt-4  lg:mt-2 ">
          {termConditions.map((data, idx) => (
            <p key={idx} className=" text-gray-700">
              {" "}
              <span className=" text-gray-800 font-medium text-base  ">
                {data.head} :-{" "}
              </span>
              {data.text}{" "}
            </p>
          ))}
        </div>
        </div>


      </div>
    </div>
  );
};

export default AllVendors;
