import React from "react";
import If, {Else} from './if'

export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja Bem vindo, <strong>{usuario.nome}!</strong>
            </If>
            <If test={!usuario && !usuario.nome}>
                Seja Bem vindo, <strong>Anônimo!</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja Bem vindo, <strong>{usuario.nome}!</strong>

                <Else>
                    Seja bem Vindo, <strong>Anônimo!</strong>
                </Else>
            </If>
            
        </div>
    )
}