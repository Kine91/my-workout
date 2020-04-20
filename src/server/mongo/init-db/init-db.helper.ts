import * as mongo from 'mongodb';

export class InitMangoHelper {

  protected client: mongo.MongoClient;

  constructor(client: mongo.MongoClient) {
    this.client = client;
    console.log('helper created');
  }
}
