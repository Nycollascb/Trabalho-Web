import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="classe">
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
                  <a class="nav-link" href="#carros">
                    Carros
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/users/list">
                    Cadastro de Pessoas
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/cars/list">
                    Cadastros de Carro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contatos">
                    Contatos
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <body id="corpo">
        <section class="container">
          <h2 id="quemSomos">Quem Somos</h2>
          <div id="conteudoIndex" class="flex flex-around">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper dapibus ante, at rutrum orci sollicitudin vel. Morbi id
            lacinia augue, cursus elementum lacus. Vestibulum id turpis a ante
            mattis blandit. Mauris dictum molestie enim vel suscipit. Curabitur
            scelerisque sapien in ante posuere varius. Cras quam justo, feugiat
            a velit et, accumsan congue nulla. Nam luctus libero ultrices justo
            sodales, in gravida ante sodales. Ut bibendum ex tortor, vitae
            gravida justo porta quis. Fusce convallis est justo, vel viverra
            velit dignissim id. Ut pulvinar porttitor sem. Suspendisse sed ipsum
            dignissim, maximus nunc sed, molestie justo. Sed feugiat varius
            tortor, vel hendrerit felis blandit eu. Morbi sagittis velit nec
            purus molestie, quis laoreet enim molestie. Integer venenatis ipsum
            vitae augue efficitur, eu sagittis enim ullamcorper. Cras commodo
            massa nec nunc vulputate hendrerit. Aliquam sit amet suscipit urna.
            Phasellus quis orci lacinia, consequat nibh nec, efficitur ipsum. Ut
            faucibus, massa ac iaculis ullamcorper, urna turpis molestie lectus,
            eu finibus libero augue at velit. Maecenas sapien leo, malesuada
            quis mauris at, ornare tempor dolor. Duis pellentesque volutpat
            orci.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ullamcorper dapibus ante, at rutrum orci sollicitudin vel. Morbi id
            lacinia augue, cursus elementum lacus. Vestibulum id turpis a ante
            mattis blandit. Mauris dictum molestie enim vel suscipit. Curabitur
            scelerisque sapien in ante posuere varius. Cras quam justo, feugiat
            a velit et, accumsan congue nulla. Nam luctus libero ultrices justo
            sodales, in gravida ante sodales. Ut bibendum ex tortor, vitae
            gravida justo porta quis. Fusce convallis est justo, vel viverra
            velit dignissim id. Ut pulvinar porttitor sem. Suspendisse sed ipsum
            dignissim, maximus nunc sed, molestie justo. Sed feugiat varius
            tortor, vel hendrerit felis blandit eu. Morbi sagittis velit nec
            purus molestie, quis laoreet enim molestie. Integer venenatis ipsum
            vitae augue efficitur, eu sagittis enim ullamcorper. Cras commodo
            massa nec nunc vulputate hendrerit. Aliquam sit amet suscipit urna.
            Phasellus quis orci lacinia, consequat nibh nec, efficitur ipsum. Ut
            faucibus, massa ac iaculis ullamcorper, urna turpis molestie lectus,
            eu finibus libero augue at velit. Maecenas sapien leo, malesuada
            quis mauris at, ornare tempor dolor. Duis pellentesque volutpat
            orci. </p>
          </div>
          <h2 id="carros">Carros</h2>
          <div id="conteudoIndex" class="flex flex-around">
            <img src="../img/maseratti.jpg" id="img"></img>
            <img src="../img/ferrari.jpg" id="img"></img>
            <img src="../img/jaguar.jpg" id="img"></img>
            <img src="../img/gtr.jpg" id="img"></img>
            <img src="../img/Onix.jpg" id="img"></img>
            <img src="../img/x1.jpg" id="img"></img>
            <img src="../img/cruze.jpg" id="img"></img>
            <img src="../img/Lamborghini.jpg" id="img"></img>
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
              <b>Informações ao consumidor:</b>Localiza Rent a Car S/A - CNPJ nº
              16.670.085/0001-55
            </p>
            <p class="flex start">
              Avenida Bernardo Vasconcelos, n° 377 - Cachoeirinha - <b>CEP:</b>{" "}
              31.150-000 - Belo Horizonte - MG
            </p>
            <p class="flex start">
              <b>Central de Reservas e Assistência a Clientes 24h:</b> 0800 979
              2020
            </p>
            <p class="flex start">
              <b>E-mail:</b> centraldereservas@localiza.com
            </p>
          </div>
        </section>
      </footer>

      <style>h1{}</style>
    </div>
  );
}
