function ListaDeContato({nome, tel, remover, id}) {

    return (
        <li>{nome} - {tel} <button onClick={()=>remover(id)}>Excluir Contato</button></li>
    );
}

export default ListaDeContato;