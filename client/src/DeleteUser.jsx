import { useState } from "react";

function DeleteUser(){
    const[id, setId]=useState("")

    const handleClick=async()=>{
        const res=await fetch( `http://localhost:4000/users/${id}`,{
            method:"DELETE"
        })
        const data= await res.json()
        console.log(data);
        alert(data.message)
        
    }

    return(<>
    <h2>delete user</h2>
    <input placeholder="user ID" value={id} onChange={(e)=>setId(e.target.value)} />
    <button onClick={handleClick}>delete</button>
    </>)
}