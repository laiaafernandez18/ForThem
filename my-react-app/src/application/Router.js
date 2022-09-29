
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import OpenCard from '../pages/OpenCard';
import Voluntaried from '../pages/Voluntaried';
import Donate from '../pages/Donate';
import App from '../App';
import { useEffect, useState } from 'react'

function Router() {
    

    
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<App/>}/>
           
            <Route path='/Home' element={<Home/>}/>
            <Route path='/OpenCard/' element={<OpenCard/>}/>
            <Route path='/Voluntaried' element={<Voluntaried/>}/>
            <Route path='/Donate' element={<Donate/>}/>
            
           
         
        </Routes>
    </BrowserRouter>
)
}
export default Router