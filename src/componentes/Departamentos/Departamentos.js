import Colaborador from '../Colaborador/Colaborador'
import './Departamentos.css'

const Departamentos = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className="departamentos" style={{ backgroundColor: props.corSecundaria }}>
            <input type="color" className="input-cor" value={props.corPrimaria} onChange={elemento => props.mudarCor(elemento.target.value, props.nome)} />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="cards">
                {props.colaboradores.map((colaborador) => {
                    return <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                        deletar={props.deletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Departamentos