import "./App.css";
import MouseTracker from "./Components/MouseTracker";

function App() {
  return (
    <>
      <MouseTracker
        render={(X, Y) => (
          <h1>Mouse position: {X}, {Y}</h1>
        )}
      />
    </>
  );
}

export default App;
