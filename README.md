# 🚀 Task API - Gerenciamento de Tarefas

## 📌 Descrição

API RESTful desenvolvida com Node.js, Express e PostgreSQL para gerenciamento de tarefas.

## 🧱 Tecnologias

* Node.js
* Express
* Sequelize
* PostgreSQL
* Jest

## ⚙️ Como rodar o projeto

```bash
git clone https://github.com/giselesouza/PosGraduacao
cd PosGraduacao
npm install
```

### 🔐 Variáveis de ambiente

Crie um `.env`:

```
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=123456
DB_NAME=taskdb
DB_PORT=5432
```

### ▶️ Rodar aplicação

```bash
npm run dev
```

### 🧪 Rodar testes

```bash
npm test
```

## 🔄 Endpoints

* GET /tasks
* GET /tasks/:id
* POST /tasks
* PUT /tasks/:id
* DELETE /tasks/:id

## 📦 Funcionalidades

✔ CRUD completo
✔ Filtros por status
✔ Paginação
✔ Tarefas atrasadas

## 🧪 Testes

Testes unitários com Jest.

## 📄 Licença

MIT
