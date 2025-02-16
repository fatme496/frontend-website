
import "../styles/AboutUs.css"; 
import interior1 from "../assets/images/interior1.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      
      {/* Header */}
      <header className="header">
        <h2>Transforming Spaces, Inspiring Lives</h2>
        <h1>Your Trusted Interior Design Partner.</h1>
      </header>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in 20XX, VIVA DECOR began with a simple vision: to create spaces that reflect individuality and elegance.</p>
        <div className="image-container">
          <img src={interior1} alt="Our Story" />
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-values">
        <h2>Mission and Values</h2>
        <p>We believe in blending functionality with aesthetics to create spaces that inspire and delight.</p>
        
      </section>

      {/* Our Team Section with background rectangle */}
      <section className="our-team">
        <div className="rectangle">
          <h2>Our Team</h2>
          <p>Meet our talented designers, architects, and project managers who bring your vision to life.</p>
        </div>
        <img src={interior3} alt="Our Team" />
      </section>

      {/* Working With Us Section */}
      <section className="working-with-us">
        <div className="rectangle">
          <p>Working with <strong>VIVA DECOR</strong> was a seamless experience. They truly understood our vision!</p>
        </div>
        <img src={interior4} alt="Working with Us" />
      </section>
    </div>
  );
};

export default AboutUs;