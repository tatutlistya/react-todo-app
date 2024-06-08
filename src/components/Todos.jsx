import React from 'react'

const Todos = ({ todos }) => {
    return (
      <div>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
  )
}

export default Todos