<h1 align="center" style="font-size:30px " >
Sochat
</h1>
<h1 align="center">
    <img alt="Web-tag" src="https://github.com/hjunor/assets/blob/master/sochat/Screen%20Shot%202021-03-27%20at%2016.29.09.png" width="80%" />
</h1>

<p align="center">
  <a href="#rocket-sobre">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#collision-funcionalidades">Bibliotecas Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-rodando-o-projeto">Rodando o Projeto</a>
</p>

<h2>
Sochat
</h2>

## 🚀 Descrição da Aplicação

Aplicação Web Desenvolvida como projeto para desenvolvimento em grupo para a materia de Sistema distribuidos, tem como intuito ser um chat em tempo real onde usuarios podem interagir um com outros.

Ela está hospedada no Netlify [Sochat](https://sochat.netlify.app/).

## :collision: Bibliotecas Utilizadas

- React Router Dom: Bibliotecas responsáveis pela construção e navegação em diferentes telas na aplicação.

- Styled-components, styled-icons: Biblioteca utilizada para aplicar estilos aos componentes de React Native e icones.

- Axios: Biblioteca utilizada comunicação entre a api.

- soket.io.client: Biblioteca de socket para monitoramento de mudanca nos valores no endpoints.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com a seguinte tecnologiaa:

- [React](https://pt-br.reactjs.org/)

\* Para mais detalhes, veja o <kbd>[package.json](./package.json)</kbd>

## :zap: Rodando o projeto

### Pré-requisitos

1 - Fazer o clone da aplicaçao:

2 - Instalar os pacotes com o comando yarn ou npm:

```bash
# Em um terminal, entrar na raiz do projeto e rodar o comando:
$ yarn
# ou
$ npm install

```

3 - Rodando o Projeto:

```bash
$ yarn start

```

5 -

Arquivos importantes:

- [Api](./src/services/api.js)
- [Timeline](./src/pages/Timeline/index.js)
