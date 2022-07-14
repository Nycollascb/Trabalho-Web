import api from "../../services/api";
import { useState } from "react";
import Head from "next/head";


export default function CreateUser() {
  const [user, setUser] = useState({ name: "", idade: 0 });

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === "name") {
      setUser({ name: value, idade: user.idade });
    }

    if (e.target.name === "idade") {
      setUser({ name: user.name, idade: parseInt(value) });
    }
  }

  async function createUser() {
    api
      .post("/users", user)
      .then(() => {
        alert("Usuário criado!");
        window.location = "/users/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  console.log(user);

  return (
    <div>
      <Head>
        <title>Trabalho final WEB</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
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
                <li class="nav-item active">
                  <a class="nav-link" href="/users/list">
                    Lista de Usuários
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/users/update">Atualizar Usuário</a>
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
        <section class = "container">
        <h3>Criar Usuário</h3>
        <div id="conteudo" class = "flex flex-around">
          
         <form class = "tabela" onChange={(e) => onChange(e)}>
          <div>
          <label class="dado" htmlFor="name">Nome</label>
          <input class="dado" type="text" name="name"></input>
          </div>
          <div>
          <label class="dado" htmlFor="name">Idade</label>
          <input class="dado" type="number" name="idade"></input>
          </div>
          <button class="dado" onClick={() => createUser()}>Adicionar usuário</button>
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
