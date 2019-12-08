import { Datastore } from '@google-cloud/datastore';
import { Gstore } from 'gstore-node';

console.log(process.env.DATASTORE_PROJECT_ID);

const datastore = new Datastore();
const gstore = new Gstore();

const { Schema } = gstore;

gstore.connect(datastore);

const userSchema = new Schema({
  name: { type: String },
  birthday: { type: Date },
});

const User = gstore.model('User', userSchema);

const start = async (): Promise<void> => {
  const user = new User({ name: 'seb', birthday: Date() });

  await user.save();

  console.log('User saved with id', user.id);
};

start();
