import { useState } from "react"

function UpdateUserPut(){
    const [id, setId] = useState("");
    const[user, setUser]= useState({username:"", password:"", hobbies:""})

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const updateUser={
            username:user.username,
            password:user.password,
            hobbies:user.hobbies.split(",")
        }

        const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateUser),
        });
        const data= await res.json()
        console.log('replaced data', data);
        alert('User updated successfully')

        // Reset form
        setId("");
        setUser({ username: "", password: "", hobbies: "" });
        
    } 
    return(
        <div>
        <h2>Replace the entire user using update</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", margin:"20px", width:"200px"}}>
             <input placeholder="User ID" value={id} onChange={(e) => setId(e.target.value)} />
            <input placeholder="username" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value })}} />
            <input placeholder="password" value={user.password} onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
            <input placeholder="hobbies" value={user.hobbies} onChange={(e)=>{setUser({...user, hobbies:e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default UpdateUserPut