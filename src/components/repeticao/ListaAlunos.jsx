import React from "react";
import alunos from '../../data/alunos.js'

export default function ListaAlunos(props) {

    const listaAlunos = alunos.map(aluno=> {
        return (
        
        <li key = {aluno.id}>
            {aluno.id}) {aluno.nome} &#8594; {aluno.nota} 
        </li>
        
        )

    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {listaAlunos}
            </ul>
        </div>
    )
    
}