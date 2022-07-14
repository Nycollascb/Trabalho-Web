const express = require("express");
const routes = express.Router();

const UsersController = require("./controllers/UsersController");
const CarsController = require("./controllers/CarsController");

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.read);

routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.delete);


routes.get("/cars", CarsController.indexCar);
routes.get("/cars/:id", CarsController.readCar);

routes.post("/cars", CarsController.createCar);
routes.put("/cars/:id", CarsController.updateCar);
routes.delete("/cars/:id", CarsController.deleteCar);

routes.get("*", function (req, res) {
  res.status(404).send("Página não encontrada!");
});

module.exports = routes;
