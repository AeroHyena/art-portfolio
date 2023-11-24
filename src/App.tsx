import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Slider from "./components/Slider";
import "./App.css";

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
      <Message />
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Slider />
    </div>
  );
}

export default App;
