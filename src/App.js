import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Component/notFound'
import TodoHomeContainer from './Component/TodoContainer/TodoHomeContainer'

const App = () => {
  return (
    <div className='app__container'>
      <Routes>
        <Route exact path='/' element={<TodoHomeContainer />} />
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