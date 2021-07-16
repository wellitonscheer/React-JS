import React from "react"

export default props =>{
    return(
        <div>
            <button onClick={() => {
                const valor = props.onClicar(Math.round(Math.random() * 1001))
            }}>Alterar</button>
            <h1>{props.valor}</h1>
        </div>
    )
}
