import React from "react";
import produtos from '../../data/produtos.js'
import '../repeticao/TabelaProdutos.css'

export default function TabelasProdutos(props) {

    function getLinhas() {
        return produtos.map((produto,i)=> {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nomeProduto}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }
   return (
    <div className="TabelaProdutos">
        <table border='2'>

            <thead>

                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                
            </thead>
            <tbody>
                {getLinhas()}
            </tbody>
            
        </table>
    </div>
   )
    
}