import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"

import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [novoDepartamento, setNovoDepartamento] = useState('')
    const [cor, setCor] = useState('')

    const enviar = (evento) => {
        evento.preventDefault()
        props.novoColaborador({
            id: uuidv4(),
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            departamento: departamento
        })
        setNome('')
        setCargo('')
        setImagem('')
        setDepartamento('')
    }

    return (
        <section className="formulario">
            <form onSubmit={enviar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    inputAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    inputAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe a URL da Imagem"
                    valor={imagem}
                    inputAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Departamento"
                    itens={props.departamentos}
                    valor={departamento}
                    inputAlterado={valor => setDepartamento(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.criarDepartamento({ nome: novoDepartamento, corPrimaria: cor })
                setNovoDepartamento('')
                setCor('')
            }}
            >
                <h2>Preencha os dados para criar um novo departamento</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do departamento"
                    valor={novoDepartamento}
                    inputAlterado={valor => setNovoDepartamento(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    type="color"
                    label="Cor"
                    valor={cor}
                    inputAlterado={valor => setCor(valor)}
                />
                <Botao>
                    Criar Departamento
                </Botao>
            </form>
        </section >
    )
}

export default Formulario