import React from 'react'
import Create from './Create'
import { Route,Routes } from 'react-router-dom'
import Read from './Read'
import Edit from './Edit'

const App = () => {
  return (
    
    <>{/*yahe basicaly route baaya hu*/}
    <Routes>
      <Route path='/' element={<Read/>}></Route>
      <Route path='/Create' element={<Create/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
    </Routes>
    </>
  )
}

export default App