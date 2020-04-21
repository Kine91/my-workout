import { MongoHelper } from "../mongo.helper";
import { InitMangoHelper } from "./init-db.helper";

const initDB = async () => {
  try {
    console.info(`Connected to Mongo!`);

    await MongoHelper.connect(`mongodb://localhost:27017/myOrganizer`);
    const initHelper = new InitMangoHelper(MongoHelper.client, 'myOrganizer');
    initHelper.initWorkouts();

  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
};

initDB();
