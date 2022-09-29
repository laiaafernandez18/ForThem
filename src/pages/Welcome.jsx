
import "../index.css";
import React from "react";
import Tittle from "../components/Tittle";
import fondo from '../Imagenes/fondo.webp';
import principal from '../Imagenes/principal.jpg'
import { Link } from "react-router-dom";
import DonateHand from "../Imagenes/DonateHand.png";

function Welcome(){
    return(
        <div className="welcome">
            <Tittle/> 
        <div class="principal-main">
                    <img class="img-fondo"  src={fondo} alt="fondoprincipal"/>

                 <div class="box-dogs">
                    <img class="img-dogs" src={principal}  alt="animals"/>
                 </div>
           
        </div>

            <div className="container-prin-text">
                 <div className="box-subtittle">
                     <h2 className="subtittle-welcome">Make a new friend</h2>
          </div>
        <div class="box-text-principal">
                        <p class="info">lorem ipsum Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        </p>
                        <img class="icon-hand"  src={DonateHand} alt="fondoprincipal"/>
            </div>
            </div>
         
                                      
                       
            <div class="container-btn">
            <Link class="btn-principal" to="/Home">Home</Link> 
             </div>
       
        </div>
  

    )

}

export default Welcome;
