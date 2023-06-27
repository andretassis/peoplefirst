import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Departamentos from './componentes/Departamentos/Departamentos';
import Rodape from './componentes/Rodape/Rodape';
import './App.css'

function App() {

  const [departamentos, setDepartamentos] = useState([
    {
      id: uuidv4(),
      nome: "Recrutamento e Seleção",
      corPrimaria: "#57C278"
    },

    {
      id: uuidv4(),
      nome: "Treinamento e Desenvolvimento",
      corPrimaria: "#82CFFA",
    },

    {
      id: uuidv4(),
      nome: "Gestão de Talentos",
      corPrimaria: "#A6D157",
    },

    {
      id: uuidv4(),
      nome: "Administração de Pessoal",
      corPrimaria: "#E06B69",
    },

    {
      id: uuidv4(),
      nome: "Comunicação Interna",
      corPrimaria: "#D86EBF",
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: "Joao Tassis",
      cargo: "AAAAAA",
      imagem: "https://www.github.com/andretassis.png",
      departamento: "Gestão de Talentos"
    },
    {
      id: uuidv4(),
      nome: "Andre Tassis",
      cargo: "AAAAAA",
      imagem: "https://www.github.com/andretassis.png",
      departamento: "Gestão de Talentos"
    },
    {
      id: uuidv4(),
      nome: "Fabio Tassis",
      cargo: "AAAAAA",
      imagem: "https://www.github.com/andretassis.png",
      departamento: "Recrutamento e Seleção"
    }
  ])

  const novoCadastro = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoColaborador(cor, id) {
    setDepartamentos(departamentos.map(departamento => {
      if (departamento.id === id) {
        departamento.corPrimaria = cor;
      }
      return departamento
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario departamentos={departamentos.map(departamento => departamento.nome)} novoColaborador={colaborador => novoCadastro(colaborador)} />
      <section className="organizacao">
        <h3>Organização</h3>
        {departamentos.map(departamento => <Departamentos
          key={departamento.id}
          id={departamento.id}
          nome={departamento.nome}
          corPrimaria={departamento.corPrimaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.departamento === departamento.nome)}
          deletar={deletarColaborador}
          mudarCor={mudarCorDoColaborador}
        />)}
      </section>

      <Rodape />
    </div>
  );
}

export default App;
