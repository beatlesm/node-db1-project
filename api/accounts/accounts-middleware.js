const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  Account.getById(req.params.id)
    .then( account => {
      if ( account ) {
        req.account = account
        next()
      } else {
        next ({
          status: 404,
          message: `account not found`
        }) 
      }
    })
    .catch(next)
}
