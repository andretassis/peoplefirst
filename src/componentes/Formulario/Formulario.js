import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    const departamentos = [
        "Recrutamento e Seleção",
        "Treinamento e Desenvolvimento",
        "Gestão de Talentos",
        "Administração de Pessoal",
        "Comunicação Interna"
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criação do card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Instagram" placeholder="Informe a URL do Instagram" />
                <ListaSuspensa label="Departamento" itens={departamentos} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario