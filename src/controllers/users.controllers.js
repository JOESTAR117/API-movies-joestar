import User from '../models/user.js';

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = await new User(user).save();

    res.json({ newUser });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const credentials = req.body;
    const user = await User.findOne(credentials);

    if (user) {
      res.json(user);
    } else {
      res.json('No users found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { createUser, login };
