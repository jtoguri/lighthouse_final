const { Pool } = require('pg')

const dbParams = require("../lib/db.js");

const pool = new Pool(dbParams)

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now()
    return pool
      .query(text, params)
      .then(res => {
        const duration = Date.now() - start
        console.log('executed query', 
          { text, duration, rows: res.rowCount })
        return res;
      })
      .catch(err => console.log(err));
  },
};
