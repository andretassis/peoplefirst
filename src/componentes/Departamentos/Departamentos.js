import Colaborador from '../Colaborador/Colaborador'
import './Departamentos.css'

const Departamentos = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className="departamentos" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="cards">
                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Departamentos