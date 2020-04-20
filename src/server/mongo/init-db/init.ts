import { MongoHelper } from "../mongo.helper";
import { InitMangoHelper } from "./init-db.helper";

const initDB = async () => {
  try {
    await MongoHelper.connect(`mongodb://localhost:27017/myWorkout`);
    console.info(`Connected to Mongo!`);
    const initHelper = new InitMangoHelper(MongoHelper.client);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
};

initDB();
