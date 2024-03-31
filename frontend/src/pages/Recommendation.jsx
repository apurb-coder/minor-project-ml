import React,{useState} from 'react'
import ytlogo from "../assets/youtubelogo.png"
import spotifylogo from "../assets/Spotify_Logo_CMYK_Green.png"
import { useOutput } from '../context/modelOutputContext'


const Recommendation = () => {
  const redirect = (link) => {
    window.location.href = link;
  };

  const {songname,mood} = useOutput(); // data from context api
  const [youtubelink, setYoutubelink] = useState("https://www.youtube.com/");
  const [spotifylink, setSpotifylink] = useState("https://open.spotify.com/");
  return (
    <div className=" font-medium">
      <div className="flex flex-col justify-center item-center p-[1.25rem]">
        <h1 className="text-3xl">Your Mood: {mood}</h1>
      </div>
      <div className="flex flex-col justify-center  p-[1.25rem]">
        <h3 className="text-xl">Recommendation: {songname}</h3>
        <div className="mt-9 flex">
          <div className="mr-3 px-5 py-3 bg-white rounded-full w-1/2 flex justify-center items-center hover:cursor-pointer" onClick={() => redirect(youtubelink)}>
            <img src={ytlogo} alt="yt logo" className="h-4" />
          </div>

          <div
            className="ml-3 px-5 py-3 bg-white rounded-full w-1/2 flex justify-center items-center hover:cursor-pointer"
            onClick={() => redirect(spotifylink)}
          >
            <img src={spotifylogo} alt="yt logo" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation