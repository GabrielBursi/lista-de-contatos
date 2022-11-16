import React, { useState } from 'react';
import ListaDeContato from './components/ListaDeContato';

function App() {

  const [contato, setContato] = useState({nome: '', tel: ''});
  const [listaContato, setListaContato] = useState([]);

  function definirNome(e){
    setContato({...contato, nome: e.target.value})
  }

  function definirTel(e) {
    setContato({ ...contato, tel: e.target.value });
  }

  function adicionarContato(){

    if(contato.nome === '' || contato.tel === '') return

    setListaContato([...listaContato,contato])
  }

  return (
    <>
      <h1>Lista de contatos</h1>
      <hr />
      <div>
        <label>Nome:</label>
        <input type="text" onChange={definirNome}></input>
      </div>
      <div>
        <label>Telefone:</label>
        <input type="tel" required placeholder="(xx) xxxxx-xxxx" onChange={definirTel}></input>
      </div>
      <button onClick={adicionarContato}>Adicionar contato</button>
      <hr/>
      <ListaDeContato lista={listaContato}/>
    </>
  );
}

export default App;
