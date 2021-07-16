import React from "react"
import "./App.css"
import Primeiro from "./componentes/Basicos/Primeiro"
import ComParametro from './componentes/Basicos/ComParametro'
import ComFilhos from "./componentes/Basicos/ComFilhos"
import Card from "./componentes/layout/Card"
import Repeticao from "./componentes/Repeticao.jsx"
import Condicional from "./componentes/Basicos/Condicional"
import If from "./componentes/Basicos/CondicionalComIf"
import Pai from "./componentes/comunicacao/direta/Pai"
import Super from "./componentes/comunicacao/indireta/Super"

export default props =>
<div className="App">
    <Card Titulo="#08- Comunicação indireta">
        <Super/>
    </Card>
    <Card Titulo="#07- Comunicação direta">
        <Pai sobrenome="loco" MeioSobre="locão"/>
    </Card>
    <Card Titulo="#06- Condicional 2.0">
        <If numero={7}/>
    </Card>
    <Card Titulo="#05- Condicional 1.0">
        <Condicional numero={6}/>
    </Card>
    <Card Titulo="#04- Repetição">
        <Repeticao/>
    </Card>
    <Card Titulo="#03- Componente com filhos">
        <ComFilhos>
            <div id="lista">
                <ul>
                    <li>Ana</li>
                    <li>Maria</li> 
                    <li>João</li>
                    <li>Pedro</li>
                </ul>
            </div>
        </ComFilhos>
    </Card>
    <Card Titulo="#02- Componente com parametro">
        <ComParametro Titulo="Esse é o titulo"
        Subtitulo="Esse é o subtitulo"/>
    </Card>
    <Card Titulo="#01- Primeiro Componente">
        <Primeiro/>
    </Card>
</div>