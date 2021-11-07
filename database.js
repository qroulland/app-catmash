var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE cat (id INTEGER PRIMARY KEY AUTOINCREMENT, vote integer, url text)`,
    (err) => {
      if (err) {
        // All is ok
      }else{
        console.log('Seeding database')
        var insert = 'INSERT INTO cat (vote, url) VALUES (?,?)'
        const data = require('./data.json')
        data.images.forEach(element => {
          db.run(insert, [0, element.url])
        })
        console.log('Database fully seeded')
      }
    });  
  }
});


module.exports = db