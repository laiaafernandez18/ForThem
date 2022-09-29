import Tittle from "../components/Tittle";
import ubication from "../Imagenes/ubication.jpg"

function Donate(){
    return(
       < div className="cointainer">
                <Tittle/>
                <div className="box-tx-write">
                  <h2>Help us, give the best</h2>
            </div>
                   <div className="p-write">
                        <p>lorem ipsum Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took</p>
                    </div>
                    <main>
                         <div className="container-write">
                                 <p className="p-tx-write">Producto a donar:</p>
                                 <input className="write-bar-donate"></input>
                        </div>
                        <div className="container-write">
                                 <p className="p-tx-write">tlf / correo electronico:</p>
                                 <input className="write-bar-donate"></input>
                        </div>
                        <div className="container-write">
                                 <p className="p-tx-write">Tu ciudad:</p>
                                 <input className="write-bar-donate"></input>
                        </div>
                        </main>
 
                        <div className="container-btn">
                        <button className="btn-write">Valida</button>
                        </div>

                        <div className="container-ubication">
                            <div className="box-ubication">
                        <img src={ubication} className="ubication-icon" alt="icon-ubication"></img>   
                        </div>
                  <p className="tx-ubication">Barcelona</p>
                  <p className="tx-ubication">Tarragona</p>
                 </div>
                
             </div>    
             
    )
}
export default Donate;