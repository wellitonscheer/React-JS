import React, {useState} from "react"

export default (props) => {
    const [numero, setNumero] = useState(Array(props.qtdeNumero).fill(0))

    function NContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? NContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce(a => [...a,NContido(a)], [])
            // .sort((a, b) => a - b)
        setNumero(novoArray)
    }
    return(
        <>
            <h3>Mega</h3>
            <h4>{numero.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}