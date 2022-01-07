const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "ME2021project",
  database: "cdacwpt",
};

const addMsg = async (tempRef) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `insert into message values(?)`;
  connection.queryAsync(sql, [tempRef.message]);
  console.log("Message Added");

  await connection.endAsync();
};
// const tempRef = { message: "Hello All..1st one" };
// const tempRef = {  message: "Hello All..1st one" };
// const tempRef = {  message: "Hiiiiiiiiiiiiiiiii" };
//const tempRef = { message: "How are you alll?" };
// const tempRef = { message: "Thank you, for using ChatApp" };
// addMsg(tempRef);

const selectAllMsg = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from message`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

module.exports = { addMsg, selectAllMsg };
