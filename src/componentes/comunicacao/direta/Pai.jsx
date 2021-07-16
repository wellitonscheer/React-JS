import React from "react"
import Filho from "./Filho"

export default props =>
    <div>
        <Filho sobrenome=" Scheer">joao</Filho>
        <Filho {...props}>Pedro </Filho>
        <Filho sobrenome=" Scheer">Maria</Filho>
    </div>