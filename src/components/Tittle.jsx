

import React, { useState } from "react";
import { HeaderWrapper } from "../Burger/styles/Header";
import Navbar from "../Burger/Navbar";
import MenuButton from '../Burger/MenuButton';

function Tittle(){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
return(
   

    <div className="principal-header">     
        <div class="burger">
            
        <HeaderWrapper >
      <Navbar   open={open} />
      <MenuButton className="img-burger" open={open} handleClick={handleClick} />
    </HeaderWrapper>
   
           
            
         </div>
            <div className="box-tittle">
                 <div class="title-forthem">ForThem</div>
             </div>
            

   
    </div>
    
        )
    }

export default Tittle;
