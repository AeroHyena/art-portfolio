import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Slider from "./components/Slider";
import "./App.css";

const description = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "lotsa ass, lotsa sass",
];

function App() {
  let cities = [
    "New York",
    "San Fransisco",
    "Boston",
    "Denver",
    "Seattle",
    "Tokyo",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/*
      <Message />
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
  */}
      <Slider description={description} media="{null}" />
    </div>
  );
}

export default App;
