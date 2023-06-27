import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>counter</h1>
      <hr />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </button>
    </>
  )
}
