import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criação do card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Instagram" placeholder="Informe a URL do Instagram" />
            </form>
        </section>
    )
}

export default Formulario