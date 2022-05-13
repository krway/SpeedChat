import "./App.css";
import Chats from "./Components/Chats";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Authentication/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/chats" exact component={Chats} />
      </BrowserRouter>
    </div>
  );
}

export default App;
