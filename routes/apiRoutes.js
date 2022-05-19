const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json')


router.get('/notes', (req, res) => {
    res.json(db)
})
router.post('/notes', (req, res) => {
    db.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(db, null, "\t"))
    res.json(db);
})


module.exports = router;