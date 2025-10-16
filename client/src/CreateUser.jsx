import { useState } from "react"

function CreateUser(){
    const [user, setUser]=useState({username:"", password:"", hobbies:""})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // const formattedUser = {
        // username: user.username,
        // password: user.password,
        const hobbiesArray= user.hobbies.split(",")
        //   };
        const res= await fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...user, hobbies:hobbiesArray})
        })

        const data=await res.json()
        console.log("Created user:", data);
        alert("User created successfully!");
        

    }
    return(<>
    <h2>create User</h2>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px", margin: "20px auto"}}>
        name:<input placeholder="" value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})}/>
        Password:<input placeholder="" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
        hobbies:<input placeholder="" value={user.hobbies} onChange={(e)=>setUser({...user, hobbies:e.target.value})}/>
        <button type="submit"> submit</button>
    </form>

    </>)
}

export default CreateUser