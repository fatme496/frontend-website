import "../styles/Footer.css";

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Production</a></li>
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