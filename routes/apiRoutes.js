const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const db = require('../db/db.json')

//setup GET route to get and render notes

router.get('/notes', (req, res) => {
    fs.readFile(__dirname + '/db/db.json', 'utf8', function(error, data){
        if(error){
            return console.log(error)
        }
        console.log('getting notes') 
        res.json(JSON.parse(data))
    })
    
})
    //read notes in db.json file
    // router.post('/notes', (req, res) => {
    //     db.push(req.body)
    //     fs.writeFileSync('./db/db.json', JSON.stringify(db, null, "\t"))
    //     res.json(db);
    // })
    



module.exports = router