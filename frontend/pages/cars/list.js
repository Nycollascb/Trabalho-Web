import api from "../../services/api";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function ListCars() {
  const [cars, setCars] = useState();
  const [loadCars, setLoadCars] = useState(true);

  async function getCars() {
    api.get("/cars").then((res) => {
      const { data } = res;
      setCars(data.cars);
    });
  }

  useEffect(() => {
    getCars();
    setLoadCars(false);
  }, [loadCars]);

  console.log(cars);
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
                  <a class="nav-link" href="/users/list">
                    Usuários
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/cars/create">
                    Cadastrar Carro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/cars/update">
                    Atualizar Carro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/cars/delete">
                    Deletar Carro
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <body id="corpo">
        <section class="container">
          <h2>Carros</h2>
          <div id="conteudo" class="flex flex-around">
            <div class="flex flex-around">
              <table>
                <thead>
                  <tr>
                    <th class="tabelaList">Id</th>
                    <th class="tabelaList">Modelo</th>
                    <th class="tabelaList">Marca</th>
                    <th class="tabelaList">Cor</th>
                    <th class="tabelaList">Ano</th>
                  </tr>
                </thead>
                <tbody>
                  {cars?.map((car) => {
                    return (
                      <tr>
                        <td class="tabelaList">{car.id}</td>
                        <td class="tabelaList">{car.modelo}</td>
                        <td class="tabelaList">{car.marca}</td>
                        <td class="tabelaList">{car.cor}</td>
                        <td class="tabelaList">{car.ano}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <button class="dado"><a class="nav-link" href ="/">VOLTAR</a></button>
          <button class="dado"><a class="nav-link" href ="/cars/create">ADICIONAR</a></button>
          <button class="dado"><a class="nav-link" href ="/cars/update">ALTERAR</a></button>
          <button class="dado"><a class="nav-link" href ="/cars/delete">EXCLUIR</a></button>
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
