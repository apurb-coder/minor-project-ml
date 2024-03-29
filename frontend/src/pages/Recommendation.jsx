import React,{useState} from 'react'
import ytlogo from "../assets/youtubelogo.png"
import spotifylogo from "../assets/Spotify_Logo_CMYK_Green.png"

const Recommendation = () => {
  const [spotifylink, setSpotifylink] = useState("https://open.spotify.com/");
  const [youtubelink, setYoutubelink] = useState("https://www.youtube.com/");
  return (
    <div className=" font-medium">
      <div className="flex flex-col justify-center item-center p-[1.25rem]">
        <h1 className="text-3xl">Your Mood: Happy</h1>
      </div>
      <div className="flex flex-col justify-center  p-[1.25rem]">
        <h3 className="text-xl">Recommendation</h3>
        <div className="mt-9 flex">
          <div className="mr-3 px-5 py-3 bg-white rounded-full w-1/2">
            <a href={youtubelink}>
              <img
                src={ytlogo}
                alt="yt logo"
                className="h-4 flex justify-center items-center"
              />
            </a>
          </div>

          <div className="ml-3 px-5 py-3 bg-white rounded-full w-1/2">
            <a href={spotifylink}>
              <img
                src={spotifylogo}
                alt="yt logo"
                className="h-5 flex justify-center items-center"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation