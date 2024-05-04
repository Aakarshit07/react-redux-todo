import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

export default function TaskInput() {

  // Initialize the input state using the useState hook
  const [input, setInput] = useState("");

  // Retrieve the dispatch function to dispatch actions to the Redux store using the useDispatch hook
  const dispatch = useDispatch()

  // Event handler for submitting the form to add a new todo
  const addTodoHandler = (e) => {
    e.preventDefault()
    // Dispatch the addTodo action with the input value
    dispatch(addTodo(input))
    // Reset the input state to an empty string
    setInput("");
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input field for entering the todo text */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-2xl"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button to submit the form and add the todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}
