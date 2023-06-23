import './Departamentos.css'

const Departamentos = (props) => {
    return (
        <section className="departamentos" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Departamentos