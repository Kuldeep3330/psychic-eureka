import { useState } from "react"

function UpdateUserPatch(){
    const[id, setId]=useState("")
    const[update, setUpdate]=useState({username:"", password:"", hobbies:""})

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const body={}
        if(update.username) body.username=update.username
        if(update.password) body.password=update.password
        if(update.hobbies) body.hobbies=update.hobbies

        try {
            const res= await fetch(`http://localhost:4000/users/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })

        const data= await res.json()
        console.log("Updated user:", data);
        // alert("User updated successfully!");
        } catch (error) {
            console.log(error);
            
            
        }
    }
    return(<>
    <h2>Update Partial user</h2>
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
        <input placeholder="userid" value={id} onChange={(e)=>setId(e.target.value)} />
        <input placeholder="username" value={update.username} onChange={(e)=>setUpdate({...update,username:e.target.value})} />
        <input placeholder="password" value={update.password} onChange={(e)=>setUpdate({...update, password:e.target.value})} />
        <input placeholder="hobbies" value={update.hobbies} onChange={(e)=>setUpdate({...update, hobbies:e.target.value})} />
        <button type="submit">Update</button>
    </form>
    </>)
}

export default UpdateUserPatch