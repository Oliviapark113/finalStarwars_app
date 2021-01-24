const express = require('express')
//exports all express function...
const app = express()

const PORT = 3000 //3000 is express.js suggestion .. 
//2. create character array 
const characters = [

    { name: "Yoda",
      role: "Jedi Master",
      forcePoints: 100000,
      age: 900,
      avatar:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*",
      routeName:  "yoda"  // to be create dynamically

    },

    { name: "Luke Skywalker",
    role:"Jedi Master",
    forcePoints: 10000,
    age: 40,
    avatar:"https://static.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest/scale-to-width-down/340?cb=20180123070942",
    routeName:  "lukeskywalker"  // to be create dynamically

  },

  { name: "Princess Leia",
  role:"General Princess",
  forcePoints: 100,
  age: 40,
  avatar:"https://api.time.com/wp-content/uploads/2016/12/carrie-fisher-movies-2.jpg?w=600&quality=85",
  routeName:  "princessleia"  // to be create dynamically

}


]

//1.set up route for our homepage 
//'/' means homeroute but usually not shows if there is only home page .. takes cb "req" and "res"
app.get('/', (req , res)=>{
   //recieve response and send to browser ...
    res.send('May the force be with you')
})
// listen to this data(characters) and send data back to client.
//there are two kinds 1. send to view in browser like html .. 3. send just data ...THAT IS API..prefix when sending
//data only... /api
// /api/chracters - show all characters data and recieve all characters data which is in json form
app.get('/api/characters',(req, res)=>{
      res.json(characters)
}) 
// /api/characters/lukeskywalker..  
// /api/characters/:routeName










//then we need to listen our server ..
app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})