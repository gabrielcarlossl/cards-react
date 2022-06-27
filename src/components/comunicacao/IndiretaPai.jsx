import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'


export default function IndiretaPai(props){

    let [nome, setNome] =useState('?')
    
    let [idade, setIdade] =useState(0)
    
    let [nerd, setNerd] =useState(false)

    function fornecerInfo(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span> {idade} </span>
                <span>{nerd ? 'verdadeiro': 'falso'}</span>
            </div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
        </div>
    )
}