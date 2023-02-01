import User from '../models/user.js';
import bcrypt from 'bcrypt';
import  {loginService, generateToken } from '../services/loginService.js';




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
  const {email,password} = req.body
  try {
    const user = await loginService(email)

    if(!user){
      return res.status(404).send({ message: "User or Password not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if(!passwordIsValid){
      return res.status(404).send({ message: "User or Password not found" });
    }

    const token = generateToken(user.id)

    res.json({user,token})
    
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { createUser, login};
