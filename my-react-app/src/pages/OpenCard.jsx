import "../index";
import React from 'react';
import { Link } from "react-router-dom";
import DonateHand from "../Imagenes/DonateHand.png"
import { useEffect, useState } from 'react'
import Perfil from "../components/Perfil";

function OpenCard(){
    const [perritosApi, setPerritosApi] = useState([]);
    useEffect (()=>{
        fetch("http://localhost:3000/forThem")
        .then (respone=>respone.json())
        .then (data=>setPerritosApi(data))
   })

    return(
 <div> 
    
    {
                  
                  perritosApi.map((item,index)=> (
                      <Perfil key={index} mascota={item}/>
                   )) 
}
        <img className="open-img"/>
            <div className="container-open">
                <div className="box-open-text">
                        <h3 className="tx-lolita">Lolita</h3>
                            <p className="tx-card-lore">lorem ipsum Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's standard Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standardIpsis simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard</p>


                                <div className="container-little-open">
                            
                                         <Link  to="/Donate" className="container-icon-hand-open">
                                                 <img class="icon-hand-open"  src={DonateHand} alt="fondoprincipal"/>
                                        </Link>
                                        <div>
                                            <Link to="/Voluntaried">
                                        <button type="button" class="button-open"> Meet him</button>
                                            </Link>
                                     </div>
                                </div>    
                              
                  
                        
                </div>
            </div>
</div>
   
   
   )

}
export default OpenCard;