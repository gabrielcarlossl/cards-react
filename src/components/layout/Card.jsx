import React from "react";
import './Card.css'

export default function Card(props) {
    const cardStyle = {
        backgroundColor: props.color ||  'rgb(139, 128, 240)',
        borderColor: props.color || '#000'
        
    }

   
    return (
        <div className="Card" style={cardStyle}>

            <div className="Title">
                <h3>{props.titulo}</h3>
            </div>

            <div className="Content">
                {props.children}
            </div>
            
        </div>
    )
}