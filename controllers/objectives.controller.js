export class ObjectivesController {
    constructor(objectivesServices) {
        this.objectiveServices = objectivesServices;
    }

    fetchAll(res) {
        return res.status(200).json(this.objectiveServices.fetchAll());
    }
}