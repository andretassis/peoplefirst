import "./CampoTexto.css"

const CampoTexto = (props) => {

    const alteraInput = (evento) => {
        props.inputAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-${props.type}`}>
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={alteraInput}
                required={props.obrigatorio}
                placeholder={props.placeholder}
                type={props.type}
            />
        </div>
    )
}

export default CampoTexto