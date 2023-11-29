import IndexButton from "./IndexButton";
import DataFormat from "./interfaces";
import { useState } from "react";

interface SliderProps {
  descriptions: {
    hash: string[];
    [key: string]: string[];
  };
  media: string;
}

function Slider({ descriptions, media }: SliderProps) {
  // Set state to hold data which can be updated by the child compnents
  // initialize using initial data
  const [data, setData] = useState({
    description: descriptions["hash"],
    media: "whooop",
  });
  return (
    <>
      <div id="slider">
        <h1>Description</h1>

        <div id="sliderContent">
          {data.description.length === 0 && (
            <p>No description is available for this project</p>
          )}
          <div id="description">
            {data.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div id="media">
            <p>{media}</p>
          </div>
        </div>
      </div>

      <div id="indexRow">
        {Object.keys(descriptions).map((key) => (
          <IndexButton
            index={key}
            rootData={{ description: descriptions[key], media: "media" }}
            setData={setData}
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
