import api from "../../services/api";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function UpdateUser() {
  const [user, setUser] = useState({ name: "", idade: 0 });
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === "selectedUser") {
      setUserId(parseInt(value));
    }

    if (e.target.name === "name") {
      setUser({ name: value, idade: user.idade });
    }

    if (e.target.name === "idade") {
      setUser({ name: user.name, idade: parseInt(value) });
    }
  }

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  async function updateUser() {
    api
      .put(`/users/${userId}`, user)
      .then(() => {
        alert("Usuário atualizado!");
        // setLoadUsers(true);
        window.location = "/users/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(user);

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
                    Voltar a Lista
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/users/create">
                    Cadastrar Usuário
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/users/delete">
                    Deletar Usuário
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <body id="corpo">
        <section class="container">
          <h2>Usuários</h2>
          <div id="conteudo" class="flex flex-around">
            <div class="flex flex-around">
              <form onChange={(e) => onChange(e)}>
                <div>
                  <div class="dado">
                    <h4 class="dado">Selecione um usuário para atualizar</h4>
                  </div>
                  <div class="dado">
                    <select
                      class="dado"
                      name="selectedUser"
                      defaultValue="DEFAULT"
                    >
                      <option value="DEFAULT" disabled>
                        Selecione um usuário
                      </option>
                      {users?.map((user) => {
                        return <option value={user.id}>{user.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <h4 class="dado">Insira os dados para atualizar</h4>
                <div class="tabela">

                  <div class="dado">
                    <label class="dado flex start" htmlFor="name">
                      Nome
                    </label>
                    <input class="dado flex end" type="text" name="name"></input>
                  </div>
                  
                  <div class="dado">
                    <label class="dado flex start" htmlFor="name">
                      Idade
                    </label>
                    <input class="dado flex end" type="number" name="idade"></input>
                  </div>
                  
                  <div class="dado">
                      <button class="dado flex start" onClick={() => updateUser()}>
                        Atualizar usuário
                      </button>
                  </div>                
                </div>
              </form>
            </div>
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
              <b>Informações ao consumidor</b>: Localiza Rent a Car S/A - CNPJ
              nº 16.670.085/0001-55
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
              <b>E-mail</b>
              <a>: centraldereservas@localiza.com</a>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
