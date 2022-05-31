import "./components/style.css";
import Example1 from "./components/Example";
import Navbar2 from "./components/Navbar2";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Sidebar />
      <Main />
      {/* <Outlet/> */}
      {/* <Example1/>   */}
    </div>
  );
}

export default App;
