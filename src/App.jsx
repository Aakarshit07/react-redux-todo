import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline text-white hover:text-sky-600 font-serif text-center'>Todo App</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
