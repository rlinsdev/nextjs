import Footer from "./Footer"
import Navbar from "./navBar"

const LayOut = ({ children }) => {
  return ( 
    <div className="content">
      <Navbar />
      { children }
      <Footer/>
    </div>
   );
}
 
export default LayOut;