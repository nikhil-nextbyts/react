import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts/todoContext';
import TodoItem from './components/TodoItem';
import TodoForms from './components/TodoForms';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id : Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((each) => (each.id === id ? todo : each)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo, completed : !eachTodo.completed} : eachTodo))
  }

  useEffect(() => {
    const x = localStorage.getItem("todos");
    console.log(x)
    const todos = JSON.parse(x)

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForms />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
