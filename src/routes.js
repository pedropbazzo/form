const express = require('express');

const routes = express.Router();

const massacontrolers = require('./controllers/massacontrolers');

routes.get('/', (req, res) => {
    return res.json({ message: `ola ${req.query.name}` });
});  

routes.post('massa', (req, res) =>{
    console.log (req, body);

    return res.json({ ok: true });
});

module.exports = routes