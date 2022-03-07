import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  return (
    <div className={`App ${isDark ? "dark-theme" : "light-theme"}`}>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
