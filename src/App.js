import About from "./components/About";
import Conatct from "./components/Conatct";
import Expertise from "./components/Expertise"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div>
      
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Expertise/>
       <Conatct/>


      <SocialLinks/>

    </div>
  );
}

export default App;
