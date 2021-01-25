const express = require('express')
//exports all express function...
const app = express()

//copy and paste use for HW etc  any request ..boiler plate ..
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

//-----------HTML ROUTE---------------

//---------------API ROUTES----------------

//1.set up route for our homeroute 
//'/' means homeroute but usually not shows if there is only home page .. takes cb "req" and "res"
app.get('/', (req , res)=>{
   //recieve response and send to browser ...
    res.send('May the force be with you')
})
// listen to this data(characters) and send data back to client.
//there are two kinds 1. send to view in browser like html .. //3. send just data ...THAT IS API..prefix when sending
//data only... /api
// /api/chracters - show all characters data and recieve all characters data which is in json form
app.get('/api/characters',(req, res)=>{
      res.json(characters)
}) 

//4. /api/characters/:routeName output: /api/characterslukeskywalker..  

app.get('/api/characters/:routeName', (req, res)=>{
    //to access to routeName .. we can have multiple params  
    //such as /api/characters/:routeName/:count : 
    // console.log(req.params)
    const targetCharacter = req.params.routeName
    //we have to access to correct routeName .. 
    const character = characters.find(character =>{
        return character.routeName === targetCharacter 
        
    })
 
    //just put res.end()for now to prevent server from running over and over again 
    res.json(character)

})

//add new Character

app.post('/api/characters/add', (req, res)=>{
    console.log(req.body)
    const newCharacter = req.body
    //regex .. make no spaces and convert to all loswer cases
    newCharacter.routeName = newCharacter.name.replace(/ /g,'').toLowerCase()
    characters.push(newCharacter)
    console.log(characters)
    res.status(200).send()
    
})

 var word = "foo is bar"
 var word1= word.replace(/ /g, '')
 console.log(word1)


//then we need to listen our server ..
app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})