import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

import './App.css'
import TabelasProdutos from "./components/repeticao/TabelasProdutos";


export default function App(props) {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="Cards" >
        <Card titulo="#01 - Aprendendo Componentes" color='#85929E'>
          <Primeiro></Primeiro>
        </Card>

        <Card titulo="#02 - Escola" color ='#52BE80'>
          <ComParametro
            titulo="Situação do Aluno"
            nomeAluno="Gabriel"
            nota={9.7}
          ></ComParametro>
        </Card>

        <Card titulo="#03 - Fragmento" color ='#AF7AC5 '>
          <Fragmento />
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color ='#089'>
          <Aleatorio min={1} max={99}></Aleatorio>
          <Aleatorio min={1} max={99}></Aleatorio>
        </Card>

        <Card titulo="#05 - Cards" color ='#549'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quibusdam nesciunt fuga excepturi vero maiores non recusandae, inventore animi quisquam, obcaecati perspiciatis ea? Iusto commodi delectus consequatur harum porro! Sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi amet consectetur nesciunt modi veniam, illo, rerum beatae, sunt sit molestias. Culpa rem corrupti natus deserunt mollitia, unde consequuntur provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident neque laborum eveniet, sint temporibus repudiandae recusandae maiores accusantium omnis consequuntur architecto quod. Ad quae aliquam. 
        </Card>

        <Card titulo="#06 - Componente com Filhos" color='#F1C40F'>
            <Familia sobrenome='Silva'>
                <FamiliaMembro nome='Gabriel'></FamiliaMembro>
                <FamiliaMembro nome='Arimatéa'></FamiliaMembro>
                <FamiliaMembro nome='Socorro'></FamiliaMembro>
                <FamiliaMembro nome='Leticia'></FamiliaMembro>
            </Familia>
        </Card>

        <Card titulo='#07 - Repetição' color='#A9CCE3'>
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo='#08 - Repetição Produtos' color='#7DCEA0 '>
            <TabelasProdutos></TabelasProdutos>
        </Card>
      </div>
    </div>
  );
}
