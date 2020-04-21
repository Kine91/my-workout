import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongo.helper';

const port = 8080;
const server = http.createServer(app);

server.listen(port);

server.on('error', (err) => {
  console.error(err);
});

server.on('listening', async () => {
  console.info(`Listening on port ${port}`);
  try {
    await MongoHelper.connect(`mongodb://localhost:27017/myWorkout`);
    console.info(`Connected to Mongo!`);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
});
