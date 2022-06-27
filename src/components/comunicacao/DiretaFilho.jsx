import React from "react";


export default function DiretaFilho(props){
    return (
        <div>
            <div>&#10132; Nome: {props.nome}</div>
            <div> &#10132; Idade: {props.idade} Anos</div>
            <div> &#10132; Trabalha: {props.trabalha ? 'Verdadeiro' : 'Falso'}!</div>
        </div>
    )
}