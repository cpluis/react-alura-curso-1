import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                {/* esse htmlForm é para mandar o foco no campo no caso tarefa */}
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />

                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;