import { Link } from "react-router-dom";



function Carts(props){
  
        
  
    return(
<div>
        
    <img src={props.mascota.imagen} className="card"/>
    
        <Link  to="/OpenCard" className="cart-detail">
        <p className="tx-carts"> {props.mascota.nombre}</p>
        <p className="tx-carts">{props.mascota.edad} años</p>
        <p className="tx-carts-sexo">{props.mascota.sexo} </p>
        </Link>
           

</div>

    )
}
export default Carts;