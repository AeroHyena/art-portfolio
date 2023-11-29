import DataFormat from "./interfaces";

interface NumbersFormat {
  [key: string]: string;
}

const convertNumbers: NumbersFormat = {
  hash: "#",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
};

interface IndexButtonProps {
  index: string;
  rootData: DataFormat;
  setData: React.Dispatch<
    React.SetStateAction<{ description: string[]; media: string }>
  >;
}

function IndexButton({ index, rootData, setData }: IndexButtonProps) {
  return (
    <>
      <div
        key={index}
        className="indexButton"
        onClick={() => {
          setData({ description: rootData.description, media: rootData.media });
        }}
      >
        {convertNumbers[index]}
      </div>
    </>
  );
}

export default IndexButton;
