import React from "react";
import axios from 'axios';
import Global from "../Global";


export default class Animals extends Components {
    state={
        animals:[]
        , status: false
    }
    cargarAnimales = () => {
        var url = Global.urlanimals;
        var request = "/animales";
        axios.get(url + request) .then(res =>{
            this.setState({
                animals: res.data
                , status:true
            });
        });

    }
}