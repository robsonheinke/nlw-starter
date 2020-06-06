const express = require('express');
const server = express();
const db = require('./database/db');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/create-point', (req, res) => {
    return res.render('create-point.html');
});

server.post('/savepoint', (req, res) => {
    const {name,
        image,
        address,
        address2,
        state,
        city,
        items } = req.body;
    const query = `INSERT INTO places (
                    name,
                    image,
                    address,
                    address2,
                    state,
                    city,
                    items 
                ) VALUES (?,?,?,?,?,?,?);`;
        
            const values = [
                name,
                    image,
                    address,
                    address2,
                    state,
                    city,
                    items 
            ];
        
            function afterInsertData(err) {
                if (err) return console.log(err);
                console.log('cadastrado com sucesso');
                console.log(this);

                return res.render('create-point.html', { saved: true });
            }
        
            db.run(query, values, afterInsertData);
});

server.get('/search', (req, res) => {
    const search = req.query.search

    // if(search === ''){
    //     return res.render('search-results.html', { total: 0 });
    // }
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) return console.log(err);

        return res.render('search-results.html', { places: rows, total: rows.length });
    });

});


server.listen(3000);