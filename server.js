const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
//create a port and init the app

const app = express() 

const PORT = 3001;

//set up body parsing and middle ware

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

//connect to routes
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)
//start the server
app.listen(PORT, () => console.log (`app has started and listening on PORT: ${PORT}`))
