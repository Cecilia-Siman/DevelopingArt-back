# <p align='center'> Projeto Developing Art :art: </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-CECÍLIA_SIMAN_SALEMA-4dae71?style=flat-square" />
</p>

##  :clipboard: Descrição

Uma API para suprir um site de produção artística. Por meio dela é possível registrar usuários, armazenar e compartilhar suas produções artísticas. 

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs
- Node.js
- TypeScript
- Postgres & Prisma

***

## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "userName": "Lorem Ipsum"
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"}
```

```yml
POST /login
    - Rota para login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum" }
```

```yml
POST /pieces/create (autenticada)
    - Rota para adicionar nova obra de arte
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "loremipsum",
        "image": imageURL}
```

```yml
DELETE /pieces/delete (autenticada)
    - Rota para deletar obra de arte
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "id": 1
```

```yml
GET /:userId/pieces/find
    - Rota para buscar todas as obras de arte de um usuário
    - body: {}
```

```yml
GET /pieces/findAll
    - Rota para buscar todas as obras de arte salvas no banco de dados
    - body: {}
```


## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/Cecilia-Siman/DevelopingArt-back.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
