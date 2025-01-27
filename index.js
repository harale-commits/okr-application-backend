import express from "express";
import {faker} from '@faker-js/faker';

const app = express();
const PORT = 3000;

const MOCK_OBJECTIVES = [{
    id: faker.string.uuid(),
    title: faker.company.buzzNoun(),
    keyResults: {
        title: faker.company.buzzNoun(),
        initialValue: faker.number.int({min: 1, max: 90}),
        currentValue: faker.number.int({min: 1, max: 90}),
        targetValue: faker.number.int({min: 90, max: 100}),
        metrics: faker.company.catchPhrase()
    }
}]

app.get("/", (req, res) => {
    res.status(200).json(MOCK_OBJECTIVES);
});

app.listen(PORT, () => {
    return console.log("hello world");
});
