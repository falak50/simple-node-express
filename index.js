const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
  res.send('wow yhelo bye to learn niode i am learning node and express with nodemon ');
})

const users = [
    {  id:0,  name:'sabana',email:'sabana@gmail.com',  phone:'01731222884' },
    {  id:1,  name:'falak',email:'falak@gmail.com',  phone:'01739222884' },
    {  id:2,  name:'shakib',email:'shakib@gmail.com',  phone:'01431222884' },
    {  id:3,  name:'rifat',email:'rifat@gmail.com',  phone:'01930222884' },
    {  id:4,  name:'santo',email:'santo@gmail.com',  phone:'0150222884' }
]
app.get('/users', (req, res) => {
    console.log(req.query.search);
    const search = req.query.search;
    //use queery parameter
    if(search){
       const searcehResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
       res.send(searcehResult);
    }else {
      res.send(users);
    }
  
  })
// app.METHOD 
  app.post('/users',(req,res)=>{
      const newUser = req.body;
      newUser.id = users.length;
      users.push(newUser);
      console.log('hitting the post',req.body)
    //   res.send(JSON.stringify(newUser))
    res.json(newUser);
  })




 // dynamic api
  app.get('/users/:id',(req,res)=>{
      const id= req.params.id;
      const user = users[id]
     res.send(user);
  })

  app.get('/fruits/mangoes/fazli',(req,res)=>{
      res.send(['mango','oranges','banana','apple'])
  })

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
