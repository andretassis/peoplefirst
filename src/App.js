import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const novoCadastro = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario novoColaborador={colaborador => novoCadastro(colaborador)} />
    </div>
  );
}

export default App;
