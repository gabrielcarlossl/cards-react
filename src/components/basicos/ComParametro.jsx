import React from "react"

export default function ComParametro(props){

    const status = props.nota >7 ? 'Aprovado' : 'Reprovado'

    return (
        <div> 
            <h3>{props.titulo}:</h3>
            <p> 
                {props.nomeAluno} 
                <strong> &#8594; Nota:</strong>  {props.nota} 
                <strong> <br />&#8594; Situação: {status}</strong>
            </p>

        </div>
    )
}