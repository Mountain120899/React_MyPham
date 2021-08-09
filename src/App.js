import {BrowserRouter as Router, Link} from "react-router-dom";

import Header from "./layout/HeaderComp";
import Center from "./layout/CenterComp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Center />
      </div>
    </Router>
  );
}

export default App;
