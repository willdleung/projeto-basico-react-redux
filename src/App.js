import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {

const [inputFrutas, setInputFrutas] = React.useState("");
const [inputTitulo, setInputTitulo] = React.useState("");
// Redux
const frutas = useSelector((state) => state.frutasReducer.frutas)
const stateTitulo = useSelector((state) => state.tituloReducer.titulo);

const dispatch = useDispatch();

function adicionarFruta(event) {
  event.preventDefault();

const objFruta = {
  nome: inputFrutas
}

  dispatch({type: "ADICIONAR", value: objFruta})

}

function alterarTitulo(event) {
  setInputTitulo(event.target.value)
  dispatch({type: "ALTERAR", value: event.target.value})
}

return (
    <div class="jumbotron">
      
      <div>
        <Menu />
        <br />

        <div class="form-group">
        <form>
          <label> Título </label>
          <input
          class="form-control"
          placeholder="Digite o título"
          value={inputTitulo}
          onChange={alterarTitulo}
          />
        </form>
        </div> 

      </div>
      <div class="">  
        <h1 class="display-4">{stateTitulo}</h1>

        <div class="form-group">
        <form onSubmit={adicionarFruta}>

          <input
          class="form-control"
          placeholder="Digite uma fruta..."
          value={inputFrutas}
          onChange={(event) => setInputFrutas(event.target.value)}
          />
          <br />
          <button class="btn btn-outline-info">
              Enviar
          </button>

        </form>
        </div>
      </div>

      {frutas.map((fruta, index) => {
        return (
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
