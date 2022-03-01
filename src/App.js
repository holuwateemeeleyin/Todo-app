import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Component/notFound'
import TodoHomeContainer from './Component/TodoContainer/TodoHomeContainer'
import './App.css'

const App = () => {
  return (
    <div className='app_container'>
      <Routes>
        <Route exact path='/' element={<TodoHomeContainer />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>

    // <Layout>


    //   <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path="*" element={<NotFound />} />
    //     {/* <Route exact path="/home" element={} /> */}
    //   </Routes>
    // </Layout>
  )
}

export default App