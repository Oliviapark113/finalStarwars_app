const express = require('express')
const app = express()
//exports all express function...

const PORT = 3000 //3000 is express.js suggestion .. 

//set up route for our homepage 
//'/' means homeroute but usually not shows if there is only home page .. takes cb "req" and "res"
app.get('/', (req , res)=>{
   //recieve response and send to browser ...
    res.send('May the force be with you')

})
//then we need to listen our server ..
app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})