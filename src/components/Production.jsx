import "../styles/Production.css";
import interior5 from "../assets/images/interior5.jpg";
import interior6 from "../assets/images/interior6.jpg";
import interior7 from "../assets/images/interior7.jpg";
import interior8 from "../assets/images/interior8.jpg";

const Productioncomponent = () => {
  return (
    <div className="Production-container">
      <h2 className="title">
        Crafting Excellence – <span className="highlight">From Concept to Completion.</span>
      </h2>

      <div className="step-by-step">
        <h3>Step-by-Step Process</h3>
        <img src={interior5} alt="step-by-step" />

        <ul>
          <li><strong>Step 1: Consultation</strong> – Understand your needs and vision.</li>
          <li><strong>Step 2: Design & Planning</strong> – Create custom designs and layouts.</li>
          <li><strong>Step 3: Materials Selection</strong> – Choose high-quality materials.</li>
          <li><strong>Step 4: Execution</strong> – Bring the design to life with precision.</li>
          <li><strong>Step 5: Final Touches</strong> – Ensure every detail is perfect.</li>
        </ul>
      </div>

      <div className="material">
        <div className="image-box">
          <img src={interior6.jpg} alt="material" />
          <p>We source sustainable, premium materials to ensure durability and elegance.</p>
          </div>
        </div>

        <div className="technology">
            <div className="image-box">
          <img src={interior7.jpg} alt="technology" />
          <p>We use cutting-edge 3D rendering software to visualize your space before construction begins.</p>
           </div>
        </div>

        <div className="Sustainable Design">
        <div className="image-box">
          <img src={interior8.jpg} alt="Sustainable Design" />
          <p>We are committed to sustainable design, using eco-friendly materials and practices.</p>
         </div>
         </div>
      
    </div>
    );
    };

export default Productioncomponent;
