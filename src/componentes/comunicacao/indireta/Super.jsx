import React, {useState} from "react"
import Sub from "./Sub"

export default (props) => {
    const [valor, setValor] = useState('');

    function quandoClicar(ValorGerado) {
        console.log("Ação!!!!");
        setValor(ValorGerado)
    }

    const pessoa = {
        nome: "a",
        idade: 1
    }

    const {nome, idade} = pessoa

    const array = [1, () => 3]
    const [v, setV] = array



    return(
        <div>
            <h4>Valor</h4>
            <Sub valor={valor} onClicar={quandoClicar}></Sub>
        </div>
    );
};
