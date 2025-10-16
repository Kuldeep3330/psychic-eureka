import express from 'express'
import users from './data.js'
import cors from 'cors'

const app= express()

app.use(cors())
app.use(express.json());

//get all users
app.get('/users', (req, res)=>{
    res.send(users)
})

//get user by ID
app.get('/users/:id', (req, res)=>{
    const id=parseInt(req.params.id)
    const user= users.find((user)=>user.id===id)
    res.status(202).json(user)

})

//POST-> create new user
app.post('/users', (req, res)=>{
    const {username, password, hobbies}= req.body

    const newUser={
        id:users.length+1,
        username,
        password,
        hobbies
    }

    users.push(newUser)
    res.status(201).json(newUser);
})

//put replace entire user
app.put('/users/:id', (req, res)=>{
    const id=parseInt(req.params.id);
    const index= users.findIndex(u=>u.id===id);

    if(index===-1) return res.status(404).json({message:"User not found"})
    
    users[index]={id, ...req.body}
    res.json(users[index])

})
//5. PATCH → Update partial fields
app.patch("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  delete req.body.id; // prevent ID update
  Object.assign(user, req.body);

  res.json(user);
});

//delete user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //is that user available
  const idx=users.findIndex(u=>u.id===id)
  if (idx === -1) return res.status(404).json({message:"user not found"})
  users.splice(idx, 1);
  res.json({ message: `User ${id} deleted successfully` });
});

const PORT= 4000

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})