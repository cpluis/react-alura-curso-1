import React, { Component } from "react";

// interessante que criamos um arquivo index.tsx nesse botão

// essaa classe Component precisa da função render
// criando um botão que sera chamado no AppTsx
// criamos um componente logo não precisa ficar reescrevedo
// digamos que eu tenha um formulario e esse formulario tenha um botão 
// eu posso usar esse botão no formulario
class Botao extends React.Component{
render() {
    return(
        <button>
            Botão
        </button>
    )
}
}
// exportando esse botão para usar no Apptsx
export default Botao;