import React, { useState,useRef } from 'react';
import ListaDeContato from './components/ListaDeContato';

function App() {

  const [contato, setContato] = useState({nome: '', tel: ''});
  const [listaContato, setListaContato] = useState([]);

  const nomeRef = useRef();
  const telRef = useRef()

  function definirNome(e){
    setContato({...contato, nome: e.target.value})
  }

  function definirTel(e) {
    setContato({ ...contato, tel: e.target.value });
  }

  function adicionarContato(){

    if(contato.nome === '' || contato.tel === '') return

    const contatoDuplicado = listaContato.find(ct => ct.nome === contato.nome && ct.tel === contato.tel)
    if(contatoDuplicado){
      telRef.current.focus()
      return
    }

    setListaContato([...listaContato,contato])

    setContato({nome:'', tel:''})
    nomeRef.current.focus()
  }

  return (
    <>
      <h1>Lista de contatos</h1>
      <hr />
      <div>
        <label>Nome:</label>
        <input type="text" ref={nomeRef} onChange={definirNome} value={contato.nome}></input>
      </div>
      <div>
        <label>Telefone:</label>
        <input type="tel" ref={telRef} required placeholder="(xx) xxxxx-xxxx" onChange={definirTel} value={contato.tel}></input>
      </div>
      <button onClick={adicionarContato}>Adicionar contato</button>
      <hr/>
      <ListaDeContato lista={listaContato}/>
    </>
  );
}

export default App;
