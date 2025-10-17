import { useState } from 'react'
import { useEffect } from 'react'
import GetUsers from './GetUsers';
import CreateUser from './CreateUser';
import UpdateUserPut from './UpdateUserPut';
import UpdateUserPatch from './UpdateUserPatch';

function App(){
  return (
    <>
    {/* <GetUsers/> */}
    {/* <CreateUser/>
     */}
     {/* <UpdateUserPut/> */}
     <UpdateUserPatch/>
    </>
  )
}

export default App
