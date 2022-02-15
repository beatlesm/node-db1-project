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

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  const { name, budget } = req.body
  Account.create(req.body)
    .then ( resp => {      
      res.status(201).json({
        id: resp[0],
        name: name,
        budget: budget
      })
    })
    .catch(next)
})

router.put('/:id', md.checkAccountId, md.checkAccountPayload, (req, res, next) => {
  const { name, budget } = req.body
  Account.updateById(req.params.id, req.body)
    .then ( resp => {      
      if ( resp )  {
        res.status(200).json({
          id: req.params.id,
          name: name,
          budget: budget
        })
      } else {
        next ({
          status: 400,
          message: 'update fails'
        })
      }
      
    })
    .catch(next)

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
