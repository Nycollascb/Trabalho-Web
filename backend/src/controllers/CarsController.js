const { models } = require("../config/database");
const Car = models.Cars;
const path = require("path");

class CarsController {
    async indexCar(req, res) {
        try {
            const cars = await Car.findAll();
            return res.status(200).send({ cars: cars });
        } catch (e) {
            return res.status(500).json({
                error: e,
                message: e.message,
            });
        }
    }

    async readCar(req, res) {
        try {
            const id = req.params.id;
            const car = await Car.findByPk(parseInt(id));
            return res.status(200).send({ cars: car });
        } catch (e) {
            return res.status(500).json({
                error: e,
                message: e.message,
            });
        }
    }

    async createCar(req, res) {
        try {
            let modelo = req.body.modelo;
            let cor = req.body.cor;
            let marca = req.body.marca;
            let ano = req.body.ano;
            const newCar = await Car.create({
                modelo: modelo,
                cor: cor,
                marca: marca, 
                ano: ano,
            });
            res.status(201).send({ message: "Carro criado!", newCar: newCar });
        } catch (e) {
            return res.status(500).json({
                error: e,
                message: e.message,
            });
        }
    }

    async updateCar(req, res) {
        try {
            const id = req.params.id;
            const modelo = req.body.modelo;
            const cor = req.body.cor;
            const marca = req.body.marca;
            const ano = req.body.ano;

            const car = await Car.update(
                { modelo: modelo, cor: cor, marca: marca, ano: ano },
                { where: { id: id } }
            );
            if (car[0] === 1) {
                return res.status(200).send({ message: "Carro atualizado!" });
            } else {
                return res.status(200).send({ message: "Nenhum dado alterado!" });
            }
        } catch (e) {
            return res.status(500).json({
                error: e,
                message: e.message,
            });
        }
    }

    async deleteCar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const car = await Car.destroy({ where: { id: id } });
            console.log(car);
            if (car === 1) {
                return res.status(200).send({ message: "Carro removido!" });
            } else {
                return res.status(200).send({ message: "Nenhum usuário removido!" });
            }
        } catch (e) {
            return res.status(500).json({
                error: e,
                message: e.message,
            });
        }
    }
}

module.exports = new CarsController();
