import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
const PORT = 3030;

app.use(express.json());

// usando as rotas
app.use(usuariosRoutes);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});