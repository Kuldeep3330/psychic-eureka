import { useState } from 'react'
import { useEffect } from 'react'
import GetUsers from './GetUsers';
import CreateUser from './CreateUser';
import UpdateUserPut from './UpdateUserPut';
import UpdateUserPatch from './UpdateUserPatch';
import DeleteUser from './DeleteUser';

function App(){
  return (
    <>
    {/* <GetUsers/> */}
    {/* <CreateUser/>
     */}
     {/* <UpdateUserPut/> */}
     {/* <UpdateUserPatch/> */}
     <DeleteUser/>
    </>
  )
}

export default App
