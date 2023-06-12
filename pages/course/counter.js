import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>counter</h1>
      <hr />
      <h1
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </h1>
    </>
  )
}
