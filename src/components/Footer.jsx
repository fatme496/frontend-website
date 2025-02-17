import "../styles/Footer.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h3>CONTACT US</h3>
        <p>Send us a message</p>
        <p>Full Name ...............</p>
        <p>Your Email ...............</p>
        <p>Your Message ...........</p>
      </div>
      <div className="links">
        <h3>LINKS</h3>
        <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Home page */}
          <li><Link to="/projects">Projects</Link></li> {/* Link to Project page */}
          <li><Link to="/contact">Contact Us</Link></li> {/* Link to Contact Us page */}
          <li><Link to="/about">About Us</Link></li> {/* Link to About Us page */}
          <li><Link to="/production">Production</Link></li> {/* Link to Production page */}
        </ul>
      </div>

        <div className="logo">
         <h3>LOGO</h3>
          {/* <p>
              <img src="../assets/icons/phone.jpg"  className="" />   
            01999111
         </p>

         <p>
             <img src="/assets/icons/mail.jpg"  className="icon" /> 
             xdesign@gmail.com
        </p> */}

        <p className="phone-number">01999111</p>
        <p className="email">xdesign@gmail.com</p>

        {/* <p>
           <a href="https://facebook.com" target="_blank" className="social-icon">
           <img src="/assets/icons/facebook.jpg" alt="" className="icon" />
           </a>
           <a href="https://linkedin.com" target="_blank" className="social-icon">
           <img src="/assets/icons/linkedin.png" alt="" className="icon" />
           </a>
        </p> */}
       </div>
    </footer>
  );
}

export default Footer;