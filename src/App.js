import React, { useState,useRef } from 'react';
import { v4 as cod } from "uuid";
import ListaDeContato from './components/ListaDeContato';

function App() {

  const [contato, setContato] = useState({nome: '', tel: '', id:''});
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

    setListaContato([...listaContato,{...contato, id: cod()}])

    setContato({nome:'', tel:''})
    nomeRef.current.focus()
  }

  function limparLista(){
    setListaContato([])
  }

  function removerContato(idExcluido){
    const listaAtualizada = listaContato.filter(ct => ct.id !== idExcluido)
    setListaContato(listaAtualizada)
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
      <button onClick={limparLista}>Limpar Lista</button>
      <hr/>
      <ul>
        {listaContato.map(ct => {
            return <ListaDeContato key={ct.id} id={ct.id} nome={ct.nome} tel={ct.tel} remover={removerContato}/>
        })}
      </ul>
    </>
  );
}

export default App;
