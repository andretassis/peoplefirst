import "./CampoTexto.css"

const CampoTexto = (props) => {

    const alteraInput = (evento) => {
        props.inputAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={alteraInput} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto