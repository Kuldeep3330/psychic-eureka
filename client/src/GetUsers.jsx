import { useState, useEffect } from "react";

function GetUsers(){
    const[users, setUsers]=useState([])

    useEffect(()=>{
        async function getData(){
            const res=await fetch(`http://localhost:4000/users`)
            const data= await res.json()
            setUsers(data);
        }
        getData();
    },[])
    return (
        <div>
            <h1>all users</h1>
            {
                users.map(user=>(
                    <div key={user.id} style={{border:" 1px solid gray",  margin: "5px", padding: "5px"}}>
                        <h3>{user.username}</h3>
                        <p>Password: {user.password}</p>
                        <p>Hobbies:{user.hobbies.join(",")}</p>
                    </div>
                ))
            }
        </div>
    )

}
export default GetUsers;