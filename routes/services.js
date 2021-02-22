import express from "express";
import ServicesControlles from "../controller/servicesController.js";
var router = express.Router();
var servicesController = new ServicesControlles();
/* GET home page. */
router.get("/", servicesController.index);
router.post("/test", servicesController.test);
router.post("/divisas", servicesController.divisa);
router.post("/interes", servicesController.interes)
export default router;
