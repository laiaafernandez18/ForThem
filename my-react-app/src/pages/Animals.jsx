import React, {useState, useEffect} from "react";
import Carts from "../components/Carts";



function Animals (){
    const [perritosApi, AnimlasApi] = useState([]);
        useEffect (()=>{
            fetch("https:")
            .then (respone=>respone.json())
            .then (data=>AnimlasApi(data))
       })

       return(
          <div>
            <p>hola</p>
        {
            perritosApi.map((item,index)=> (
                <Carts key={index} nombre={item.nombre} edad={item.edad} sexo={item.sexo}/>
             )) 
            
            
        }
      
      </div>

       );



}






export default Animals;