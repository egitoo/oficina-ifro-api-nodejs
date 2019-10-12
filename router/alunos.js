import AlunoService from "../service/AlunoService";
import express from "express";

const router = express.Router();
const service = new AlunoService();

export default class AlunoRouter {
  static config() {
    router.post("/", service.inserir);
    router.put("/:id", service.alterar);
    router.get("/", service.buscarTodos);
    router.get("/:id", service.buscarUm);
    router.delete("/:id", service.remover);
    return router;
  }
}