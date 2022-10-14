import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Trabalho',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Faculdade',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Familia',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Familia Namorada',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    debugger
    //console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario ParamTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
