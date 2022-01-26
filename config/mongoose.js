
const mongoose = require("mongoose");
//'mongodb+srv://dnyanesh:tnu6Lk5uHGRWAcK@cluster0.7klir.mongodb.net/upload?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://dnyanesh:tnu6Lk5uHGRWAcK@cluster0.7klir.mongodb.net/upload?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const db = mongoose.connection;
db.on("error",  console.error.bind(console,"connection error :cannot connect to the db"));
db.once("open", () => {
  console.log("connected successfully to database")
});
//tnu6Lk5uHGRWAcK