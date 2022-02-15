const db = require('../../data/db-config')

const getAll = () => {
  const rows = db('accounts')
  return rows
}

const getById = id => {
  const rows = db('accounts').where({id: id}).first()
  return rows
}

const create = account => {
  // DO YOUR MAGIC
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
