import connectDatabase from '../database/db.js';
import User from '../models/user.js';
import userJson from '../data/user.json' assert { type: 'json' };

const addUsers = async () => {
  try {
    for (let user of userJson) {
      console.log(`Inserting ${user.name}`);
      await new User(user).save();
    }
    console.log('finished script');
  } catch (err) {
    console.log(err);
  }
};
