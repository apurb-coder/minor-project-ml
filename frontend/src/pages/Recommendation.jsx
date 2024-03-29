import React from 'react'

const Recommendation = () => {
  return (
    <div className=" font-medium">
      <div className="flex flex-col justify-center item-center p-[1.25rem]">
        <h1 className="text-3xl">Your Mood: Happy</h1>
      </div>
      <div className="flex flex-col justify-center  p-[1.25rem]">
        <h3 className="text-xl">Recommendation</h3>
        <p>Based on your input, we recommend...</p>
      </div>
    </div>
  )
}

export default Recommendation