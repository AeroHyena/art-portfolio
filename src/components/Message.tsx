// PascalCasing
function Message() {
  // JSX: JavaScript XML
  const name = "Aero";
  if (name) {
    return (
      <h1>
        <u>Hello {name}</u>
      </h1>
    );
  }
  return (
    <h1>
      <u>Hello World</u>
    </h1>
  );
}

export default Message;
