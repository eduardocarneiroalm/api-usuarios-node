# API de Usuários

API REST desenvolvida em **Node.js** e **TypeScript** para gerenciamento de usuários.  
Projeto criado com o objetivo de praticar conceitos de back-end, organização de rotas e tipagem com TypeScript.

<br/>

---

## 🚀 Funcionalidades

- Listar usuários
- Criar um novo usuário
- Buscar usuário por ID
- Validação de dados
- Retorno de status HTTP apropriados

<br/>

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- TypeScript

<br/>

---

## ▶ como iniciar o projeto
### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

<br/>

---


 ## ⚙️ Passo a passo para rodar localmente
  #### Clone o repositório
  ```
  git clone https://github.com/eduardocarneiroalm/api-usuarios-node.git
  ```
  #### Acesse a pasta do projeto
  ```
  cd api-usuarios-node
```

  #### Instale as dependências
```
npm install -D typescript tsx
```
```
npm install -D @types/node
```
```
npm install -D @types/express
```
  
  ### Inicie o servidor em modo desenvolvimento
  ```
  npm run dev
```

<br/>

## 🧪 Testes

As rotas podem ser testadas utilizando ferramentas como:

- Postman
- Insomnia

<br/>

---

## 📚 Observações

Este projeto utiliza armazenamento em memória (array).
Os dados são perdidos sempre que o servidor é reiniciado.

Em versões futuras, o projeto pode ser evoluído com:

- Banco de dados (SQLite / PostgreSQL)
- Autenticação
- Atualização e remoção de usuários (PUT / DELETE)

