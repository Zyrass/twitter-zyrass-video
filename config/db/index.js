const mongoose = require("mongoose");
const { connect } = mongoose

const connexionDB = connect(
  "mongodb+srv://Zyrass:" + process.env.PASSWORD + "@zyrasstwitter.yeskz.mongodb.net/myDatabaseMessage",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log(`
    \n\tConnecté à la database
  `.bgGreen.white.bold)
}).catch(err => {
  console.log(`
    \n\tLa connexion à la base de donnée à échoué.
    \n\tErreur : ${err}
  `.bgRed.white.bold)
})
