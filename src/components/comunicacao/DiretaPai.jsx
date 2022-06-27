import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props){
    return (
        <div>
            <DiretaFilho
                nome='Gabriel Carlos' idade = {23} trabalha = {true}
            ></DiretaFilho>
            <span>&#9866;&#9866;</span>
            <DiretaFilho
                nome='Letícia Leite' idade = {24} trabalha = {false}
            ></DiretaFilho>
            
        </div>
    )
}