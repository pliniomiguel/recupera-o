import Styled from './styled.js';

export default function Home() {
  return (
    <>
    <Styled/>
      <div className="cabecalho">
        <div className="h5">
          listadeconvidados.net
        </div>

        <div className="content">
          <div className="h1">
            Nome:
          </div>

          <div className="input">
            <input type="text"/>
          </div>

          <div className="botao">
            <button> confirmar </button>
          </div>
        </div>
      </div>
      </>
     );
}

