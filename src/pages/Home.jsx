
import Tittle from "../components/Tittle.jsx";
import Search  from "../components/Search.jsx";
import Carts from "../components/Carts.jsx";
import iconDOG from'../Imagenes/iconDOG.png';
import iconCAT from'../Imagenes/iconCAT.png';
import iconRABIT from '../Imagenes/iconRABIT.png';
import iconREPTIL from'../Imagenes/iconREPTIL.png';
import iconPARROT from'../Imagenes/iconPARROT.png'
import React from "react";
import { useEffect, useState } from 'react'

     function Home() {
      const [perritosApi, setPerritosApi] = useState([]);
      useEffect (()=>{
          fetch("http://localhost:3000/forThem")
          .then (respone=>respone.json())
          .then (data=>setPerritosApi(data))
     })

 
         return (
            <div className="cointainer">
                <Tittle/>
                <Search/>  
                

               <div className="container-icons-peds">
                     <button class="icond-ped">
                           <img  className="img-icons" src={iconDOG} alt="iconDog"/>
                     </button>

                     <button className="icond-ped" >
                           <img  className="img-icons" src={iconCAT} alt="iconDog"/>
                     </button>

                     <button className="icond-ped">
                           <img  className="img-icons" src={iconRABIT} alt="iconDog"/> 
                     </button>

                     <button className="icond-ped">
                           <img  className="img-icons" src={iconPARROT} alt="iconDog"/>
                     </button>
                     
                     <button className="icond-ped">
                           <img  className="img-icons" src={iconREPTIL} alt="iconDog"/>
                     </button>
               </div>
              
             <div className="containe-carts-map">
             {
                  
            perritosApi.map((item,index)=> (
                <Carts key={index} mascota={item}/>
             )) 
            
            
        }
            </div>
 
             </div>
                 
    
           
        
       
           
      
    )
 }
 
    export default Home;
