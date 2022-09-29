import axios from 'axios';
import { useEffect, useState } from 'react'
import Carts from './Carts';

function ListAnimals(){
    const [perritosApi, AnimalesApi] = useState([])

    useEffect(()=>{
     axios.get("http://localhost:3000/forThem")
        .then((res) => {
            AnimalesApi(res.data)
        })
        
        
    },[])

    return(
        <div className="animals-list">
        { perritosApi.map((item)=>{       
            return (
                <Carts  
                key={item.id} 
                nombre={item.nombre} 
                edad={item.edad} 
                especie={item.especie} 
                imagen={item.imagen} 
                sexo={item.sexo} 
                caracter={item.caracter} 
                />
            )
            }
        )} 
        </div>
    )
}
export default ListAnimals;