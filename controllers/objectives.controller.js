export class ObjectivesController {
    constructor(objectivesServices) {
        this.objectiveServices = objectivesServices;
    }

    fetchAll(res) {
        const objectives = this.objectiveServices.fetchAll();
        return res.status(200).json(objectives);
    }
}