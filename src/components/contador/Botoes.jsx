import React from "react";


export default function Botoes(props){
    return (
        <div>
            <button onClick={props.setIncrementar}> &#10010; </button>
            <button onClick={props.setDecrementar}> &#9866; </button>
        </div>
    )
}