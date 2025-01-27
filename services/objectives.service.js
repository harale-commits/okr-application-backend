import {faker} from "@faker-js/faker";

export class ObjectivesService {
    MOCK_OBJECTIVES = [{
        id: faker.string.uuid(),
        title: faker.company.buzzNoun(),
        keyResults: {
            title: faker.company.buzzNoun(),
            initialValue: faker.number.int({min: 1, max: 90}),
            currentValue: faker.number.int({min: 1, max: 90}),
            targetValue: faker.number.int({min: 90, max: 100}),
            metrics: faker.company.catchPhrase()
        }
    }];

    fetchAll() {
        return this.MOCK_OBJECTIVES;
    }
}