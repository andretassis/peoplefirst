import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Departamentos from './componentes/Departamentos/Departamentos';
import Rodape from './componentes/Rodape/Rodape';
import './App.css'

function App() {

  const [departamentos, setDepartamentos] = useState([
    {
      nome: "Recrutamento e Seleção",
      corPrimaria: "#57C278"
    },

    {
      nome: "Treinamento e Desenvolvimento",
      corPrimaria: "#82CFFA",
    },

    {
      nome: "Gestão de Talentos",
      corPrimaria: "#A6D157",
    },

    {
      nome: "Administração de Pessoal",
      corPrimaria: "#E06B69",
    },

    {
      nome: "Comunicação Interna",
      corPrimaria: "#D86EBF",
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const novoCadastro = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log('deletei')
  }

  function mudarCorDoColaborador(cor, nome) {
    setDepartamentos(departamentos.map(departamento => {
      if (departamento.nome === nome) {
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
          key={departamento.nome}
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
