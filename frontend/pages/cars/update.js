import api from "../../services/api";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function UpdateCar() {
  const [car, setCar] = useState({ modelo: "", marca: "", cor: "", ano: 0 });
  const [cars, setCars] = useState();
  const [carId, setCarId] = useState();
  const [loadCars, setLoadCars] = useState(true);

  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === "selectedCar") {
      setCarId(parseInt(value));
    }

    if (e.target.name === "modelo") {
      setCar({ modelo: value,marca: car.marca, cor: car.cor, ano: car.ano });
    }

    if (e.target.name === "marca") {
      setCar({ modelo: car.modelo,marca: value, cor: car.cor, ano: car.ano });
    }

    if (e.target.name === "cor") {
      setCar({ modelo: car.modelo, marca: car.marca, cor: value, ano: car.ano });
    }

    if (e.target.name === "ano") {
      setCar({modelo: car.modelo, marca: car.marca,cor: car.cor, ano: parseInt(value),
      });
    }
  }

  async function getCars() {
    api.get("/cars").then((res) => {
      const { data } = res;
      setCars(data.cars);
    });
  }

  async function updateCar() {
    api
      .put(`/cars/${carId}`, car)
      .then(() => {
        alert("Carro atualizado!");
        // setLoadCars(true);
        window.location = "/cars/list";
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  useEffect(() => {
    getCars();
    setLoadCars(false);
  }, [loadCars]);

  console.log(car);

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
                <li class="nav-item">
                  <a class="nav-link" href="/cars/list">
                    Lista de Carros
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/cars/create">
                  Cadastrar Carro
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
          <h4>Cadastrar Carros</h4>
          <div id="conteudo" class="flex flex-around">
            <form class="dado" onChange={(e) => onChange(e)}>
              <h4 class="dado">Selecione um carro para atualizar</h4>
              <select class="dado" name="selectedCar" defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>
                  Selecione um carro
                </option>

                {cars?.map((car) => {
                  return (
                    <option class="dado" value={car.id}>
                      {car.modelo}
                    </option>
                  );
                })}
              </select>

              <div class="tabela">
                <h4 class="dado">Insira os dados para atualizar</h4>

                <div class="dado">
                  <label class="dado flex start" htmlFor="modelo">
                    Modelo
                  </label>
                  <input class="dado flex end" type="text" name="modelo"></input>
                </div>

                <div class="dado">
                  <label class="dado flex start" htmlFor="marca">
                    Marca
                  </label>
                  <input class="dado ado flex end" type="text" name="marca"></input>
                </div>

                <div class="dado">
                  <label class="dado flex start" htmlFor="cor">
                    Cor
                  </label>
                  <input class="dado ado flex end" type="text" name="cor"></input>
                </div>

                <div class="dado">
                  <label class="dado flex start" htmlFor="name">
                    Ano
                  </label>
                  <input class="dado ado flex end" type="number" name="ano"></input>
                </div>
                <div class="dado"> 
                  <button class="dado" onClick={() => updateCar()}>
                    Atualizar carros
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
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
