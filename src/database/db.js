import mongoose from "mongoose";

const connectDatabase = () => {
  console.log('wait connecting to the database');

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB atlas Connected'))
    .catch((erro) => console.error(erro.message));
};
export default connectDatabase;
