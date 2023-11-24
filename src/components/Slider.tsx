interface SliderProps {
  description: string[]; // The description is submitted
  media: string;
}

function Slider({ description, media }: SliderProps) {
  return (
    <>
      <div id="slider">
        <h1>Description</h1>

        <div id="sliderContent">
          {description.length === 0 && (
            <p>No description is available for this project</p>
          )}
          <div id="description">
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div id="media">
            <p>{media}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
