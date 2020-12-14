## Sobre o diretório /sistemaVigilantes

Trabalho Final - Programação Web - ERE/2020.

<br>

## Instalação

Primeiro é necessário clonar o projeto usando `git clone https://github.com/julialuiza/ProgWeb.git`.

Depois, acessar o diretório /sistemaVigilantes e configurar a aplicação usando `npm install`.

Para configuração do banco de dados, criar um banco de dados utilizando MySQL com o nome `vigilantes2` e um user com os dados contidos em `config/database.json`.
Em seguida, realizar a migração das tabelas utilizando `npx sequelize db:migrate` e `npx sequelize-cli db:seed:all`.

Para iniciar a aplicação, utilizar `node app.js`.

## Imagens do sistema

<p align="center">
  <img src="sistemaVigilantes\public\imgs\home.png"/>
</p>

<p align="center">
  <img src="sistemaVigilantes\public\imgs\jogo.png"/>
</p>

<p align="center">
  <img src="sistemaVigilantes\public\imgs\cursos.png"/>
</p>

<p align="center">
  <img src="sistemaVigilantes\public\imgs\cursoupdate.png"/>
</p>

<p align="center">
  <img src="sistemaVigilantes\public\imgs\cursodetalhes.png"/>
</p>

<p align="center">
  <img src="sistemaVigilantes\public\imgs\sobre.png"/>
</p>
