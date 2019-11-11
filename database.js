var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./db/db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name text,
            pulse_reading REAL,
            lastUpdate TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created - don't do anything
            }else{
                // Table just created, create some rows
                var insert = 'INSERT INTO patients (first_name, last_name, pulse_reading, lastUpdate) VALUES (?,?,?,?)'
                db.run(insert, ["Jason", "Jerome", 60,  "2019-10-08T11:23:00.681867Z"])
                db.run(insert, ["Margaret", "Hamilton", 70,  "2019-10-08T11:23:00.681867Z"])
                db.run(insert, ["Thornton", "Melon", 85,  "2019-10-08T11:23:00.681867Z"])
            }
        });
    }
});


module.exports = db
