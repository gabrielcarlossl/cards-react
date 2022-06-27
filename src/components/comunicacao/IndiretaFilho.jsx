import React from "react";

export default function IndiretaFilho(props){

    const callBack = props.quandoClicar
    
    const min = 50
    const max = 70

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50

    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={
                function(e){
                    callBack('João', gerarIdade(),true)
                }
            } >Fornecer Informação</button>
        </div>
    )
}