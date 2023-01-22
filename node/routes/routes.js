import express  from 'express';
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlogs,
  updateBlog,
} from "../controllers/BlogController.js";
const router = express.Router();

//Traer todos los blogs
router.get("/", getAllBlogs);
//Mostrar un solo blog
router.get("/:id", getOneBlogs);
//crear blog
router.post("/", createBlog);
//actualizar
router.put("/:id", updateBlog);
//eliminar
router.delete("/:id", deleteBlog);

export default router;
