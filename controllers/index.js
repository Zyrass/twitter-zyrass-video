const Message = require("../config/schema/Message.schema")

const getIndex = (req, res) => {

  Message.countDocuments({}, (err, counter) => {
    // Si j'ai une erreur je l'affiche dans la console.
    if (err) {
      console.log(`
        \n\tUne erreur lors de la récupération du compteur.
        \n\tErreur : ${err}
      `.bgRed.white.bold)
    }

    // si c'est OK je retourne le compteur
    const title = "Twitter | Accueil"
    res.status(200).render("index", {
      pageTitle: title,
      counter
    })
  })

  
}

const getTweets = (req, res) => {

  Message.countDocuments({}, (err, counter) => {
    // Si j'ai une erreur je l'affiche dans la console.
    if (err) {
      console.log(`
        \n\tUne erreur lors de la récupération du compteur.
        \n\tErreur : ${err}
      `.bgRed.white.bold)
    }

    // si c'est OK je retourne le compteur + une nouvelle requête
    Message.find({}, (err, docs) => {

      // si j'ai une erreur j'affiche l'erreur dans la console.
      if (err) {
        console.log(`
          \n\tUne erreur lors de la récupération de la data.
          \n\tErreur : ${err}
        `.bgRed.white.bold)
      }
  
      // afficher dans la console le ou les documents retourné
      console.log(`
        \n\t${docs}
      `.bgMagenta.white.bold)
  
      // Si aucune erreur alors on affiche les documents récupéré
      const title = "Twitter | Liste des Tweets"
      
      res.status(200).render("pages/tweet-list", {
        pageTitle: title,
        counter,
        docs: docs
      })
    })

  })

}

const getTweetForm = (req, res) => {
  const title = "Twitter | J'ai un truc à dire"
  res.status(200).render("pages/tweet-form", {
    pageTitle: title
  })
}

const postTweetForm = (req, res) => {

  const newMessage = new Message({
    message: req.body.contentMessage
  })
  
  newMessage.save()
            .then( doc => {
              console.log(`
                ${doc}
              `.bgMagenta.yellow.bold)
              res.status(200).redirect("/tweets")
            })
            .catch(err => {
              console.log(`
                \n\t${err}
              `.bgRed.white.bold)

              const errors = Object.keys(err.errors).map(key => err.errors[key].message)
              console.log(`
                \n\t${errors}
              `.bgWhite.black.bold)

              res.status(400).render("pages/tweet-form", {
                errors
              })
            })
}

module.exports = {
  getIndex,
  getTweets,
  getTweetForm,
  postTweetForm
}

/**
 * =============================================================================
 * CONTROLLERS INDEX
 * =============================================================================
 */