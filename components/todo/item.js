import React from 'react'

export default function Item({
  id = 0,
  completed = false,
  text = '',
  handleToggleCompleted,
  handleRemove,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            //setTodos(toggleCompleted(todos, id))
            handleToggleCompleted(id)
          }}
        />
        {completed ? <del>{text}</del> : text}{' '}
        <button
          onClick={() => {
            //setTodos(remove(todos, id))
            handleRemove(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}
