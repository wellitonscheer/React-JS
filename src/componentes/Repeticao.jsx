import React from "react"

import Produtos from '../Data/Produtos'
export default props  => {

    function getProdutos() {
        return Produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} ➡ R$ {prod.preco}
            </li>
        })
    }
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}