# API de Usuários

API REST desenvolvida em **Node.js** e **TypeScript** para gerenciamento de usuários.  
Projeto criado com o objetivo de praticar conceitos de back-end, organização de rotas e tipagem com TypeScript.


---

## 🚀 Funcionalidades

- Listar usuários
- Criar um novo usuário
- Buscar usuário por ID
- Validação de dados
- Retorno de status HTTP apropriados


---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- TypeScript

---

## ▶ como iniciar o projeto
### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

---


 ## ⚙️ Passo a passo para rodar localmente
  #### Clone o repositório
  git clone https://github.com/eduardocarneiroalm/api-usuarios-node.git

  #### Acesse a pasta do projeto
  cd api-usuarios-node

  #### Instale as dependências
  1. npm install
  2. npm install -D typescript tsx
  3. npm install -D @types/node
  4. npm install -D @types/express

  # Inicie o servidor em modo desenvolvimento
  npm run dev

## 🧪 Testes

As rotas podem ser testadas utilizando ferramentas como:

- Postman
- Insomnia


---

## 📚 Observações

Este projeto utiliza armazenamento em memória (array).
Os dados são perdidos sempre que o servidor é reiniciado.

Em versões futuras, o projeto pode ser evoluído com:

- Banco de dados (SQLite / PostgreSQL)
- Autenticação
- Atualização e remoção de usuários (PUT / DELETE)

