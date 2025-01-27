import express from "express";
import {ObjectivesService} from "./services/objectives.service.js";
import {ObjectivesController} from "./controllers/objectives.controller.js";

const app = express();
const PORT = 3000;

const objectivesService = new ObjectivesService();
const objectivesController = new ObjectivesController(objectivesService);

app.get("/objectives", (req, res) => {
    objectivesController.fetchAll(res);
});

app.listen(PORT, () => {
    return console.log(`App Listening on PORT : ${PORT}`);
});
