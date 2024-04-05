import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Navbar from "./navbar.jsx";
// eslint-disable-next-line no-unused-vars
import Profile from "./Profil.jsx";


// eslint-disable-next-line no-unused-vars
export default function OrderPage(props) {
  const {username} = useParams();






  return (



    <div>

      <Navbar username={username}></Navbar>
 
    </div>

  );
}
