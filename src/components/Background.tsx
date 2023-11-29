import background from "../background2.jpg";

function Background() {
  return (
    <>
      <div id="backgroundImageDiv">
        <img id="backgroundImage" src={background} />
      </div>
      <div id="backgroundPane"></div>
    </>
  );
}

export default Background;
