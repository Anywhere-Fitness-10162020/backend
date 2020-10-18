const db = require("../../database/connection");

module.exports = {
  createUser,
  getUsers,
  getUserBy,
  getUserById,
  updateUser,
  deleteUser

};

//CRUD
//Create

async function createUser(obj) {
  const id = await db("users").insert(obj);
  return getUserBy("id", id[0]);
}

//Read

function getUsers() {
  return db("users");
}

function getUserBy(column, value) {
  return db("users").where(column, value);
}

function getUserById(id) {
  return db('users')
    .where('id', id)
    .first();
}
//update

function updateUser(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(() => getUserById(id))
}

//delete

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}
