import "./App.css";

import Provider from "./Components/provider";
import Login from "./Components/login";
import Show from "./Components/showsate";


function App() {
  return (
    <div className="App">

    <Provider>
      <Login/>
      <Show></Show>
    </Provider>

    </div>
  );
}

export default App;
