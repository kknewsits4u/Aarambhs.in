import React from 'react'
import Rating from "@mui/material/Rating";
import LocationPinIcon from '@mui/icons-material/LocationPin';

const ArtistDetailCard = () => {
  return (
    <div className='flex flex-col items-start justify-start w-full h-fit  gap-4  ' >
      <h1 className='text-sm sm:text-base lg:text-lg xl:text-xl text-black font-medium  ' >Aman Photo Studio</h1>
      <p>Photography</p>
      <div className=" flex items-center justify-start w-full  ">
            <Rating
              name="sread-only"
              value={4}
              sx={{
                fontSize: "20px",
              }}
            />
        </div>
        <p><LocationPinIcon  sx={{  color:"orange" , fontSize:{ xs:14, sm:16, md:18 } }} />   Available anywhere in Agra. </p>

    </div>
  )
}

export default ArtistDetailCard