const db = require('../../data/db-config')

const getAll = () => {
  const rows = db('accounts')
  return rows
}

const getById = id => {
  return db('accounts').where({id: id}).first()  
}

const create = account => {
  return db('accounts').insert(account)  
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
