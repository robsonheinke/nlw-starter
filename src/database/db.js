const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('src/database/database.db');


// db.serialize(() => {

// //     //     // db.run(`
// //     //     //     CREATE TABLE IF NOT EXISTS places (
// //     //     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     //     //         name TEXT,
// //     //     //         image TEXT,
// //     //     //         address TEXT,
// //     //     //         address2 TEXT,
// //     //     //         state TEXT,
// //     //     //         city TEXT,
// //     //     //         items TEXT
// //     //     //     );
// //     //     // `);

// //     const query = `INSERT INTO places (
// //             name,
// //             image,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items 
// //         ) VALUES (?,?,?,?,?,?,?);`;

// //     const values = [
// //         'ecoleta 5',
// //         'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// //         'Bento Gonçalves, Centro',
// //         '865 - apto 201',
// //         'RS',
// //         'Osório',
// //         'eletronicos'
// //     ];

// //     function afterInsertData(err) {
// //         if (err) return console.log(err);
// //         console.log('cadastrado com sucesso');
// //         console.log(this);
// //     }

// //     db.run(query, values, afterInsertData);

// // db.run(`DELETE FROM places WHERE id > ?`, [1], function(err, rows){
// //     if(err) return console.log(err);
// //     console.log('Registro deletado com sucesso');
// // });    

//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) return console.log(err);
//         console.log('Aqui estão os seus registros');
//         console.log(rows);
//     });
    
// })

module.exports = db;