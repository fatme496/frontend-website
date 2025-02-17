import "../styles/Hero.css";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/aboutus");
  };
  return (
    <header className="hero">
      <div className="hero-text">
        <h1>Interior Design</h1>

        <p>
           bringing your interior dreams to life
        </p>

        <button className="start-btn" onClick={handleClick}   >
        About-us
        </button>
     { /* stats moved insde herotext */}
       <div className="stats">
         <div>
          <h2>600+</h2>
          <p>Satisfied Clients</p>
         </div>
         <div>
          <h2>100+</h2>
          <p>Unique Styles</p>
         </div>
       </div>
  </div>
      <div className="hero-images">
        <img src={interior1} alt="Interior 1" />
        <img src={interior2} alt="Interior 2" />
      </div>
    </header>
  );
}

export default Hero;