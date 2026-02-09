import { Router } from "express";
import { Usuario } from "../types/Usuarios.js";

const router = Router();

const usuarios: Usuario[] = [
  { id: 1, nome: "João", idade: 30 },
  { id: 2, nome: "Maria", idade: 25, email: "maria@email.com" },
];

router.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

router.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  const novoUsuario: Usuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

router.get("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);

  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.json(usuario);
});

export default router;