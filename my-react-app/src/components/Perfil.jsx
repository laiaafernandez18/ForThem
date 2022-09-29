

function Perfil(props){
    return(
        <div>
            
            <img src={props.mascota.imagen} className="img-perfil" />
            <p className="emoji">{props.mascota.sexo}</p>
            <h3 className="tx-lolita">{props.mascota.nombre}</h3>
            <p className="tx-card-lore">{props.mascota.descripcion}</p>
        </div>
    )
}
export default Perfil;