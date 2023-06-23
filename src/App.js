import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Departamentos from './componentes/Departamentos/Departamentos';

function App() {

  const departamentos = [
    {
      nome: "Recrutamento e Seleção",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },

    {
      nome: "Treinamento e Desenvolvimento",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },

    {
      nome: "Gestão de Talentos",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },

    {
      nome: "Administração de Pessoal",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },

    {
      nome: "Comunicação Interna",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoCadastro = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario novoColaborador={colaborador => novoCadastro(colaborador)} />

      {departamentos.map(departamento => <Departamentos key={departamento.nome}
        nome={departamento.nome}
        corPrimaria={departamento.corPrimaria}
        corSecundaria={departamento.corSecundaria}
      />)}
    </div>
  );
}

export default App;
