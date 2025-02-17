import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5174/api/users") // Adjust if using a different port
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      
      <div>
        {/* <h1>Users List</h1> */}
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;



//  import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Footer from "../components/Footer";

// function Home() {
//   return (
//     <>
//       <Navbar /> 
//       <Hero />
//       <Footer />
//     </>
//   );
// }

// export default Home;
