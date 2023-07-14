import React from "react";

export default function ButtonLogin({value, onClick}){
    
    return ( 
    <div>
        <button className="button" onClick={onClick}>{value}</button>
    </div>
    );
}