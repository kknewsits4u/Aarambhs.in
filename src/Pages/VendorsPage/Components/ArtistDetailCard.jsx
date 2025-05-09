import React from "react";
import Rating from "@mui/material/Rating";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ArtistDetailCard = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-fit  gap-4  ">
      <h1 className="text-lg  xl:text-xl text-black font-medium  ">
        Aman Photo Studio
      </h1>
      <p className=" text-base  text-gray-700" >Photographer</p>
      <div className=" flex items-center justify-start w-full  ">
        <Rating
          name="sread-only"
          value={4}
          sx={{
            fontSize: "20px",
          }}
        />
      </div>
      <p className=" text-base text-gray-700 "  >
        <LocationPinIcon
          sx={{ color: "orange", fontSize: { xs: 20, sm: 16, md: 18 } }}
        />{" "}
        Available anywhere in Agra.{" "}
      </p>
      <div className="flex items-center justify-start w-full h-fit  " >
        <p> <TrendingUpIcon  sx={{ color: "green", fontSize: { xs: 20, sm: 16, md: 18 } }} />  We are trending in Agra and Delhi.</p>
      </div>
    </div>
  );
};

export default ArtistDetailCard;
