import { v4 as id } from "uuid";

function ListaDeContato({lista}) {
    return (
        <ul>
            {lista.map(ct => (
                <li key={id()}>Nome: {ct.nome} - Telefone: {ct.tel}</li>
            ))}
        </ul>
    );
}

export default ListaDeContato;