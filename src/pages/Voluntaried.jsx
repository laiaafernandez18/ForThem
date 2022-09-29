import { Link } from "react-router-dom";
import Tittle from "../components/Tittle";
import Write from "../components/Write";
import DonateHand from "../Imagenes/DonateHand.png"

function Voluntaried(){
    return(
       < div className="cointainer">
                <Tittle/>
             <div className="box-tx-write">
                  <h2>Know Them, Volunteer area</h2>
            </div>
                   <div className="p-write">
                        <p>lorem ipsum Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took</p>
                   </div>
                        <Write/>
                        <Write/>
                        <Write/>
                        <Write/>
                    <div className="container-btn">
                        <button className="btn-write">Check</button>
                    </div>
                    
                        <div className="container-contact">
                                 <h3 className="h3-write">contactanos</h3>
                            <div className="conatainer23">
                                      <p className="contact">627397823</p>
                                <Link  to="/Donate" className="container-icon-hand">
                                        <img class="icon-hand"  src={DonateHand} alt="fondoprincipal"/>
                                 </Link>
                            </div>
                                      <p className="contact">forthem@gmail.com</p>
                         </div>
                 
                 
                 
        </div>
                 
    )
}
export default Voluntaried;