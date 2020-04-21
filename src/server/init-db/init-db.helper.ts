import * as mongo from 'mongodb';
import { workoutState } from './workoutState';

export class InitMangoHelper {

  protected client: mongo.MongoClient;
  protected dbName: string;

  constructor(client: mongo.MongoClient, dbName) {
    this.client = client;
    this.dbName = dbName;

  }

  protected getCollection(name: string) {
    return this.client.db(this.dbName).collection(name);
  }

  initWorkouts() {
    const collection = this.getCollection('workouts');
    collection.deleteMany({});
    collection.insertMany(workoutState);

  }
}
