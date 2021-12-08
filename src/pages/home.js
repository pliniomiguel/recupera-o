import Styled from './styled.js';
import {useState, useEffect} from 'react';

import Api from '../service/api';
const api = new Api();

export default function Home() {

  const [Bruno,set]=useState([]);
  const [Nome, setNome] = useState('');

  async function listar(){
    let r = await api.listar(Bruno);
    setPessoas(r);
  }

  async function inserir(){
    let r = await api.inserir(Nome);
    console.log(r);

    limparcampo();
    listar();
  }

  function limparcampo(){
    setNome('bruno');

    useEffect(() => {
      listar()
    },[])
  }


  return (
    <>
    <Styled/>
      <div className="nicole">
        <div className="h5">
          listadeconvidados.net
        </div>

        <div className="seila">
          <div className="h1">
            Nome:
          </div>

          <div className="input">
            <input type="text" value={Nome}/>
          </div>

          <div className="botao">
            <button> confirmar </button>
          </div>
        </div>
      </div>
      </>
     );
}

