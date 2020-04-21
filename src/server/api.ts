import * as express from 'express';
import { MongoHelper } from './mongo.helper';

const api = express.Router();

const getCollection = (name: string) => {
  return MongoHelper.client.db('myOrganizer').collection(name);
}

api.get('/api/workouts', (req: express.Request, response: express.Response, next: express.NextFunction) => {
  const collection = getCollection('workouts');
  collection.find({}).toArray((err, items) => {
    if (err) {
      response.status(500);
      response.end();
    } else {
      response.json(items);
    }
  });
});

export { api };
