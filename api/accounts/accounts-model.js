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
  return db('accounts').where({id: id}).update(account)
  // return db('accounts')
  //   .where({id: id})
  //   .update(account)
  //   .then(count => (count > 0 ? getById(id) : null));
  
}

const deleteById = id => {
  return db('accounts').where({id: id}).del()
  
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
