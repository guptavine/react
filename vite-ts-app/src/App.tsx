
import { useState } from 'react'
import './App.css'
import Logo from './assets/react.svg'

import Input from './components/input'


function App() {

  // const [todos, setTodos] = useState<Array<{ id: string; text: string; completed: boolean }>>([])
  // const [input, setInput] = useState('');

  // const handleChange = (e:any) =>{
  //   const id = Math.floor(Math.random() * 10000);
  //   setTodos([...todos, {id:id.toString(), text: input , completed: false}])
  //   console.log(todos)
  //   setInput('');
  // }




  // const handleSubmit= (e: { preventDefault: () => void }) => {
  //   e.preventDefault()
  //   console.log('todos: ' + todos)
  // }



  return (
    <>
      <div className="container">
        <div className='col leftSide'>
          <h1 className="title">To Do Tracker </h1>
          <h4>List your task here!</h4>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='col rightSide'>
          <div className='logoHeader'>
            <img src={Logo} /> 
            <h2>Create Task</h2>
          </div>
          <form className='taskInput'>
            <Input type="number" label='create Todo ' name="text" />
            <button className='submitBtn'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
