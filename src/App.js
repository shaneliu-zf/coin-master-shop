import logo from './logo.svg';
import './App.css';

import { AddItem, AddToCart, AddTrade, CustomerCountAddOne, GetCart, GetCustomerCount, getItemOrFalse, getNotSoldItems, ItemSold, RemoveFromCart } from "./function/function";
import React, { useEffect, useState } from 'react';

import GetData from "./backend/databaseCtl/getData";

function App() {
    // let [data,setData] = useState();

    // useEffect(()=>{
    //     const getData = async () => {
    //         const a = getItemOrFalse(0);
    //         setData(await a);
    //     }
    //     getData();
    // },[]);

    // if(data===undefined){
    //     return(<div></div>);
    // }
    // else{
    //     console.log(data);
    // }

    // return (
    //     <div>
    //         {data["name"]}
    //     </div>
    // );



    let data = AddItem('newTrade', { 'coin': 0 })///getItemOrFalse(0)
    console.log(data)
    return (
        <div>
        </div>
    )
}

export default App;
