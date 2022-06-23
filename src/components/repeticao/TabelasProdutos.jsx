import React from "react";
import produtos from '../../data/produtos.js'

export default function TabelasProdutos(props) {

    const listaProdutos = produtos.map(produto=> {
        return (
        
        <table>
            
            <tr>
                <td>{produto.id}</td> 
                <td>{produto.nomeProduto}</td>
                <td>R${produto.preco}</td>
            </tr>

        </table>
        
        
        
        )

    })

    return (
        <div>   

<table>
            <tr>
                <th>Id</th> 
                <th>Produto</th>
                <th>Preço</th>  
            </tr>
            

        </table>
        
        {listaProdutos}
            
        </div>
    )
    
}