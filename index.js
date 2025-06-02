const express = require("express");

const server = express();

// me explique sobre a rota. 
// A rota "/Abacate" responde com "Hello, abacate!" quando acessada
// A rota "/Morango" responde com "Hello, Morango!" quando acessada 
// A rota "/Abacate" e "/Morango" são definidas usando o método GET do Express
// e são configuradas para enviar uma resposta de texto simples.

server.get("/abacate", (req, res) => {
  return res.send("Hello, Abacate!");
});

server.get("/morango", (req, res) => {

    console.log(req.query.usuario);
  return res.send(req.query.usuario);
});

server.listen(3000)