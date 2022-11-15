# Orange Juice

A Orange Juice é uma plataforma que oferece trilhas usando conteúdo de terceiros e próprio para quem tiver interesse em crescer na tecnologia!

Essa plataforma foi desenvolvida para o Hackathon da FCamara usando as tecnologias: NodeJS, Express, React, Javascript e mySQL. E basicamente, o programa é um servidor web local vinculado ao servidor back local que consome um serviço de banco de dados oferecido por: https://www.freemysqlhosting.net/.

## Pré-requisitos
- Ubuntu 20.04 (pode ser WSL) ou outras Distro Linux;
- Node JS (18.12);
- Vite;
- React;

## Ligando os servidores

Para iniciar, clone o repositório com:

$ git clone https://github.com/gustavdlima/orange-evolution-platform

Dentro do repositório (client e server), instale as dependências necessárias:

    $ npm install

Para ligar os servidores, basta usar os comandos:

Dentro da ./server
    $ npm start

Dentro do ./client/orange-platform
    $ npm run dev

## Usando a plataforma

Para acessar a plataforma, use http://localhost:5173/.

### Rotas permitidas:
- /
- /cadastro
- /login
- /home
- /fullstack  (privado para usuários)
- /ux (privado para usuários)
- /qa (privado para usuários)

## Contribuição
Contribuição são bem vindas!

## Licença
Gratuita!
