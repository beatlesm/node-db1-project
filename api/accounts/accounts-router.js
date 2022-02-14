const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', (req, res, next) => {
  Account.getAll()
    .then ( accounts => {
      res.status(200).json( accounts )
    })
    .catch(next)
})

router.get('/:id', md.checkAccountId, (req, res) => {
  res.status(200).json(req.account)
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
