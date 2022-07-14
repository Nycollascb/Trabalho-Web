import api from "../../services/api";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function DeleteUser() {
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  async function deleteUser() {
    api
      .delete(`/users/${userId}`)
      .then(() => {
        alert("Usuário removido!");
        setLoadUsers(true);
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  function onChange(e) {
    setUserId(parseInt(e.target.value));
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(userId);
  return (
    <div>
      <Head>
        <title>Trabalho final WEB</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <header>
        <h1 class="flex flex-around" id="home">
          Aluguel de Carros
        </h1>
        <div class="flex flex-around">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="flex flex-around" id="navbar">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/cars/list">
                    Carros
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/users/list">
                    Lista de Usuários
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/users/create">
                  Cadastrar Usuário
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/users/update">
                    Atualizar Usuário
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <body id="corpo">
        <section class="container">
          <h4>Deletar Usuário</h4>
          <div id="conteudo" class="flex flex-around">
            <form class="dado">
              <div class ="tabela">
                <select class="dado" onChange={onChange} defaultValue="DEFAULT">
                  <option class="dado" value="DEFAULT" disabled>
                    Selecione um usuário
                  </option>
                  {users?.map((user) => {
                    return <option value={user.id}>{user.name}</option>;
                  })}
                </select>
                <div class = "dado">
                  <button class="dado" onClick={() => deleteUser()}>
                    Deletar usuário
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </body>

      <footer>
        <legend id="contatos">
          <b>Contatos</b>
        </legend>
        <section class="rodape">
          <div>
            <p class="flex start">
              <b>Informações ao consumidor</b>: Localiza Rent a Car S/A - CNPJ nº
              16.670.085/0001-55
            </p>
            <p class="flex start">
              Avenida Bernardo Vasconcelos, n° 377 - Cachoeirinha - <b>CEP</b>: 
              31.150-000 - Belo Horizonte - MG
            </p>
            <p class="flex start">
              <b>Central de Reservas e Assistência a Clientes 24h</b>: 0800 979
              2020
            </p>
            <p class="flex start">
              <b>E-mail</b><a>: centraldereservas@localiza.com</a>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
